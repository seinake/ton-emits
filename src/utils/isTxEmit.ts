import type { Transaction } from "@ton/core";

const isTxEmit = (tx: Transaction): boolean => {
    const messages = tx.outMessages.values();
    const message = messages.find((msg) => msg.info.type === "external-out");
    return typeof message !== "undefined";
};

export { isTxEmit };
