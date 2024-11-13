import type { Transaction } from "@ton/core";

import type { Loader } from "@/types";

import { parseEmitTx } from "./parseEmitTx";

const parseEmitTxs = <TLoader>(
    txs: Transaction[],
    header: number,
    loader: Loader<TLoader>,
): TLoader[] | undefined => {
    const data: TLoader[] = [];

    txs.forEach((tx) => {
        const messages = tx.outMessages.values();
        return messages.some((message) => {
            const { body } = message;
            const { type } = message.info;
            const slice = body.beginParse();
            if (type === "external-out" && slice.loadUint(32) === header) {
                const emit = parseEmitTx<TLoader>(tx, loader);
                if (emit) {
                    data.push(emit);
                }
            }
        });
    });

    return data;
};

export { parseEmitTxs };
