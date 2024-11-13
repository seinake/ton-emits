import type { TonClient } from "@ton/ton";
import { useState, useEffect } from "react";

import { getEmits } from "@/core";
import type { TransactionsProps, WithLoader } from "@/types";

const useGetEmitsTx = <TLoader>(
    client: TonClient,
    options: WithLoader<TransactionsProps, TLoader>,
) => {
    const [data, setData] = useState<TLoader[]>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error>();

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const result = await getEmits(client, options);
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

export { useGetEmitsTx };
