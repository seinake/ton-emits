import type { Transaction } from "@ton/core";

import type { Loader } from "@/types";

import { parseEmitTx } from "./parseEmitTx";
import { parseEmitTxMessages } from "./parseEmitTxMessages";

/**
 * Parses an array of transactions and extracts data from emitted transactions with a specified header.
 *
 * @template TLoader - The type of data returned by the loader.
 * @param txs - The array of transactions to parse.
 * @param header - The header to filter messages.
 * @param loader - The loader function to process the transaction data.
 * @returns An array of data of type `TLoader` extracted from the transactions.
 */
const parseEmitTxs = <TLoader>(
    txs: Transaction[],
    header: number,
    loader: Loader<TLoader>,
): TLoader[] => {
    const data: TLoader[] = [];

    txs.forEach((tx) => {
        const message = parseEmitTxMessages(tx);
        if (message) {
            const { body } = message;
            const { type } = message.info;
            const slice = body.beginParse();
            if (type === "external-out" && slice.loadUint(32) === header) {
                const emit = parseEmitTx<TLoader>(tx, loader);
                if (emit) {
                    data.push(emit);
                }
            }
        }
    });

    return data;
};

export { parseEmitTxs };
