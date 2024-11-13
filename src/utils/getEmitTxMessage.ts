import type { Transaction } from "@ton/core";

const getEmitTxMessage = (tx: Transaction) => {
    const values = tx.outMessages.values();
    const message = values.find((msg) => msg.info.type === "external-out");
    return { message };
};

export { getEmitTxMessage };
