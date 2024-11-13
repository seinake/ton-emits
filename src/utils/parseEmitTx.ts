import type { Slice, Transaction } from "@ton/ton";

import { getEmitTx } from "./getEmitTx";

const parseEmitTx = <T>(tx: Transaction, loader: (slice: Slice) => T): T | undefined => {
    const { message } = getEmitTx(tx);
    if (message) {
        const { body } = message;
        const slice = body.beginParse();
        return loader(slice);
    }
};

export { parseEmitTx };
