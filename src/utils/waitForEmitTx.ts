import type { Address } from "@ton/core";
import type { TonClient, Transaction } from "@ton/ton";

import { getEmitTxMessage } from "./getEmitTxMessage";

type Props = {
    address: Address;
    refetchInterval?: number;
    refetchLimit?: number;
};

const waitForEmitTx = async (options: Props, client: TonClient): Promise<Transaction | null> => {
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
                const { message } = getEmitTxMessage(lastTx);
                if (message) {
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
