import type { Transaction } from "@ton/ton";

import type { Loader } from "@/types";

import { parseEmitTxMessages } from "./parseEmitTxMessages";

/**
 * Parses an emitted transaction and applies a loader function to extract data.
 *
 * @template TLoader - The type of data returned by the loader.
 * @param tx - The transaction to parse.
 * @param loader - The loader function to process the transaction data.
 * @returns Data of type `TLoader` if parsing is successful; otherwise, `undefined`.
 */
const parseEmitTx = <TLoader>(tx: Transaction, loader: Loader<TLoader>): TLoader | undefined => {
    const message = parseEmitTxMessages(tx);
    if (message) {
        const { body } = message;
        const slice = body.beginParse();
        return loader(slice);
    }
};

export { parseEmitTx };
