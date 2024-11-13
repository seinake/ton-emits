import type { TonClient } from "@ton/ton";

import type { TransactionProps, WithLoader } from "@/types";
import { isTxEmit, parseEmitTx } from "@/utils";

const getEmit = async <TLoader>(
    client: TonClient,
    options: WithLoader<TransactionProps, TLoader>,
) => {
    const { address, lt, hash } = options;

    try {
        const tx = await client.getTransaction(address, lt, hash);
        if (tx) {
            if (isTxEmit(tx)) {
                return parseEmitTx(tx, options.loader);
            }
        }
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
    }
};

export { getEmit };
