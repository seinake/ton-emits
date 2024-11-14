import type { TonClient } from "@ton/ton";

import type { TransactionsLoaderProps } from "@/types";
import { parseEmitTxs } from "@/utils";

/**
 * Fetches multiple transactions from the TON blockchain and parses them if they are emitted transactions.
 *
 * @template TLoader - The type returned by the loader function.
 * @param client - The `TonClient` instance used to interact with the blockchain.
 * @param options - Contains the address, header, fetch options, and loader function.
 * @param options.address - The address from which to fetch transactions.
 * @param options.header - The header identifier for the transactions.
 * @param options.opts - Options for fetching transactions (limit, lt, hash, etc.).
 * @param options.loader - The function used to parse the transactions.
 * @returns An array of parsed transactions of type `TLoader[]` if they are emitted transactions.
 * @throws Throws an error if the transactions retrieval or parsing fails.
 */
const getEmits = async <TLoader>(client: TonClient, options: TransactionsLoaderProps<TLoader>) => {
    const { address, header, opts } = options;

    try {
        const txs = await client.getTransactions(address, opts);
        if (txs.length > 0) {
            return parseEmitTxs(txs, header, options.loader);
        }
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
    }
};

export { getEmits };
