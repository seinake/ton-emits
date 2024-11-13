import type { Transaction } from "@ton/ton";

import type { Loader } from "@/types";

import { parseEmitTxMessages } from "./parseEmitTxMessages";

const parseEmitTx = <TLoader>(tx: Transaction, loader: Loader<TLoader>): TLoader | undefined => {
    const message = parseEmitTxMessages(tx);
    if (message) {
        const { body } = message;
        const slice = body.beginParse();
        return loader(slice);
    }
};

export { parseEmitTx };
