import type { Transaction } from "@ton/core";

/**
 * Checks if a transaction is an emitted transaction.
 *
 * @param tx - The transaction to check.
 * @returns `true` if the transaction contains an outgoing external message; otherwise, `false`.
 */
const isTxEmit = (tx: Transaction): boolean => {
    const messages = tx.outMessages.values();
    const message = messages.find((msg) => msg.info.type === "external-out");
    return typeof message !== "undefined";
};

export { isTxEmit };
