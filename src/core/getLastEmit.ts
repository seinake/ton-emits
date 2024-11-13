import type { Address } from "@ton/core";
import type { TonClient } from "@ton/ton";

import { getEmitTx, waitForEmitTx } from "@/utils";

type Props = {
    address: Address;
    refetchInterval?: number;
    refetchLimit?: number;
};

const getLastEmit = async (client: TonClient, options: Props) => {
    try {
        const tx = await waitForEmitTx(client, options);
        if (tx) {
            const { isEmit } = getEmitTx(tx);
            if (isEmit) {
                return tx;
            }
        }
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
    }
};

export { getLastEmit };
