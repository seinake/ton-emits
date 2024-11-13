import type { TonClient } from "@ton/ton";
import { useState, useEffect } from "react";

import { getEmit } from "@/core";
import type { TransactionProps, WithLoader } from "@/types";

const useGetEmitTx = <TLoader>(
    client: TonClient,
    options: WithLoader<TransactionProps, TLoader>,
) => {
    const [data, setData] = useState<TLoader>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error>();

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const result = await getEmit(client, options);
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

export { useGetEmitTx };
