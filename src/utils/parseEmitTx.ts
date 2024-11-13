import type { Slice, Transaction } from "@ton/ton";

import { getEmitTxMessage } from "./getEmitTxMessage";

const parseEmitTx = <T>(tx: Transaction, event: (slice: Slice) => T) => {
    const { message } = getEmitTxMessage(tx);
    if (message) {
        const outMessageSlice = message.body.beginParse();
        return event(outMessageSlice);
    }
};

export { parseEmitTx };
