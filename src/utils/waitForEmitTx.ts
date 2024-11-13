import type { TonClient, Transaction } from "@ton/ton";

import type { TransactionWaitProps } from "@/types";

import { isTxEmit } from "./isTxEmit";

const waitForEmitTx = async (
    client: TonClient,
    options: TransactionWaitProps,
): Promise<Transaction | null> => {
    const { refetchInterval = 1000, refetchLimit, address } = options;

    return new Promise((resolve) => {
        let refetches = 0;
        const interval = setInterval(async () => {
            refetches += 1;

            const state = await client.getContractState(address);
            if (!state || !state.lastTransaction) {
                clearInterval(interval);
                resolve(null);
                return;
            }

            const { lt, hash } = state.lastTransaction;
            const lastTx = await client.getTransaction(address, lt, hash);

            if (lastTx) {
                if (isTxEmit(lastTx)) {
                    clearInterval(interval);
                    resolve(lastTx);
                }
            }

            if (refetchLimit && refetches >= refetchLimit) {
                clearInterval(interval);
                resolve(null);
            }
        }, refetchInterval);
    });
};

export { waitForEmitTx };
