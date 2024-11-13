import type { Address } from "@ton/core";
import type { TonClient } from "@ton/ton";

import { getEmitTxs } from "@/utils";

type Props = {
    address: Address;
    header: number;
    opts: {
        limit: number;
        lt?: string;
        hash?: string;
        to_lt?: string;
        inclusive?: boolean;
        archival?: boolean;
    };
};

const getEmits = async (client: TonClient, options: Props) => {
    const { address, header, opts } = options;

    try {
        const txs = await client.getTransactions(address, opts);
        return getEmitTxs(txs, header);
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
    }
};

export { getEmits };
