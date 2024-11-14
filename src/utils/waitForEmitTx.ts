import type { TonClient, Transaction } from "@ton/ton";

import type { TransactionWaitProps } from "@/types";

import { isTxEmit } from "./isTxEmit";

/**
 * Waits for an emitted transaction on the TON blockchain at a specified address.
 *
 * @param client - The `TonClient` instance to interact with the blockchain.
 * @param options - The parameters for waiting for the transaction.
 * @param options.address - The contract address to monitor.
 * @param options.refetchInterval - The interval in milliseconds for re-fetching (default is 1000).
 * @param options.refetchLimit - The maximum number of re-fetch attempts.
 * @returns A promise that resolves to a `Transaction` if an emitted transaction is found; otherwise, `null`.
 */
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
