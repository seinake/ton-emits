import type { TonClient } from "@ton/ton";

import type { TransactionLoaderProps } from "@/types";
import { isTxEmit, parseEmitTx } from "@/utils";

/**
 * Fetches a single transaction from the TON blockchain and parses it if it's an emitted transaction.
 *
 * @template TLoader - The type returned by the loader function.
 * @param client - The `TonClient` instance used to interact with the blockchain.
 * @param options - Contains the transaction identifiers and loader function.
 * @param options.address - The address of the transaction.
 * @param options.lt - The logical time of the transaction.
 * @param options.hash - The hash of the transaction.
 * @param options.loader - The function used to parse the transaction.
 * @returns A parsed transaction of type `TLoader` if the transaction is an emitted transaction.
 * @throws Throws an error if the transaction retrieval or parsing fails.
 */
const getEmit = async <TLoader>(client: TonClient, options: TransactionLoaderProps<TLoader>) => {
    const { address, lt, hash } = options;

    try {
        const tx = await client.getTransaction(address, lt, hash);
        if (tx && isTxEmit(tx)) {
            return parseEmitTx(tx, options.loader);
        }
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
    }
};

export { getEmit };
