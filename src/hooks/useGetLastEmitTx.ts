import type { TonClient } from "@ton/ton";
import { useState, useEffect } from "react";

import { getLastEmit } from "@/core";
import type { TransactionWaitProps, WithLoader } from "@/types";

const useGetLastEmitTx = <TLoader>(
    client: TonClient,
    options: WithLoader<TransactionWaitProps, TLoader>,
) => {
    const [data, setData] = useState<TLoader>();
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
