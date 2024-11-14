import type { Message, Transaction } from "@ton/core";

/**
 * Extracts the outgoing external message from a transaction.
 *
 * @param tx - The transaction to extract the message from.
 * @returns A `Message` if found; otherwise, `undefined`.
 */
const parseEmitTxMessages = (tx: Transaction): Message | undefined => {
    const messages = tx.outMessages.values();
    return messages.find((msg) => msg.info.type === "external-out");
};

export { parseEmitTxMessages };
