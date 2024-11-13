import type { Transaction } from "@ton/core";

const getEmitTx = (tx: Transaction) => {
    const messages = tx.outMessages.values();
    const message = messages.find((msg) => msg.info.type === "external-out");
    return { message, isEmit: typeof message !== "undefined" };
};

export { getEmitTx };
