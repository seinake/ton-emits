import type { Message, Transaction } from "@ton/core";

const parseEmitTxMessages = (tx: Transaction): Message | undefined => {
    const messages = tx.outMessages.values();
    return messages.find((msg) => msg.info.type === "external-out");
};

export { parseEmitTxMessages };
