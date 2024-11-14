import type { TonClient } from "@ton/ton";

import type { TransactionsLoaderProps } from "@/types";
import { parseEmitTxs } from "@/utils";

const getEmits = async <TLoader>(client: TonClient, options: TransactionsLoaderProps<TLoader>) => {
    const { address, header, opts } = options;

    try {
        const txs = await client.getTransactions(address, opts);
        if (txs.length > 0) {
            return parseEmitTxs(txs, header, options.loader);
        }
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
    }
};

export { getEmits };
