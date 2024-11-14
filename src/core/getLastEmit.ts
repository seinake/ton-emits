import type { TonClient } from "@ton/ton";

import type { TransactionWaitLoaderProps } from "@/types";
import { isTxEmit, parseEmitTx, waitForEmitTx } from "@/utils";

const getLastEmit = async <TLoader>(
    client: TonClient,
    options: TransactionWaitLoaderProps<TLoader>,
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
