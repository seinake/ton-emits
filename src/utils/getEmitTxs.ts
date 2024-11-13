import type { Transaction } from "@ton/core";

const getEmitTxs = (txs: Transaction[], header: number) => {
    return txs.filter((tx) => {
        const messages = tx.outMessages.values();
        return messages.some((message) => {
            const { body } = message;
            const { type } = message.info;
            const slice = body.beginParse();
            if (type === "external-out" && slice.loadUint(32) === header) {
                return message;
            }
        });
    });
};

export { getEmitTxs };
