import type { TonClient } from "@ton/ton";

import type { TransactionWaitLoaderProps } from "@/types";
import { isTxEmit, parseEmitTx, waitForEmitTx } from "@/utils";

/**
 * Waits for the next emitted transaction on the TON blockchain and parses it.
 *
 * @template TLoader - The type returned by the loader function.
 * @param client - The `TonClient` instance used to interact with the blockchain.
 * @param options - Contains waiting parameters and a loader function.
 * @param options.address - The address to monitor for new transactions.
 * @param options.refetchInterval - Optional interval in milliseconds to check for new transactions.
 * @param options.refetchLimit - Optional limit on the number of checks.
 * @param options.loader - The function used to parse the transaction.
 * @returns A parsed transaction of type `TLoader` when an emitted transaction occurs.
 * @throws Throws an error if the waiting or parsing fails.
 */
const getLastEmit = async <TLoader>(
    client: TonClient,
    options: TransactionWaitLoaderProps<TLoader>,
) => {
    try {
        const tx = await waitForEmitTx(client, options);
        if (tx && isTxEmit(tx)) {
            return parseEmitTx(tx, options.loader);
        }
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
    }
};

export { getLastEmit };
