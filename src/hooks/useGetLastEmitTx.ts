import type { Address, Transaction } from "@ton/core";
import type { TonClient } from "@ton/ton";
import { useState, useEffect } from "react";

import { getLastEmit } from "@/core";

type Props = {
    address: Address;
    refetchInterval?: number;
    refetchLimit?: number;
};

const useGetLastEmitTx = (client: TonClient, options: Props) => {
    const [data, setData] = useState<Transaction>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error>();

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const result = await getLastEmit(client, options);
                if (result) {
                    setData(result);
                }
            } catch (error) {
                if (error instanceof Error) {
                    setError(error);
                }
                setLoading(false);
            } finally {
                setLoading(false);
            }
        })();
    }, [client, options]);

    return {
        data,
        loading,
        error,
    };
};

export { useGetLastEmitTx };
