import type { TonClient } from "@ton/ton";

import type { TransactionWaitProps, WithLoader } from "@/types";
import { isTxEmit, parseEmitTx, waitForEmitTx } from "@/utils";

const getLastEmit = async <TLoader>(
    client: TonClient,
    options: WithLoader<TransactionWaitProps, TLoader>,
) => {
    try {
        const tx = await waitForEmitTx(client, options);
        if (tx && isTxEmit(tx)) {
            return parseEmitTx(tx, options.loader);
        }
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
    }
};

export { getLastEmit };
