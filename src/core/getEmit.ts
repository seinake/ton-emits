import type { Address } from "@ton/core";
import type { TonClient } from "@ton/ton";

import { getEmitTx } from "@/utils";

type Props = {
    address: Address;
    lt: string;
    hash: string;
};

const getEmit = async (client: TonClient, options: Props) => {
    const { address, lt, hash } = options;

    try {
        const tx = await client.getTransaction(address, lt, hash);
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

export { getEmit };
