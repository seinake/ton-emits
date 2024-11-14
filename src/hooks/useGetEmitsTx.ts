import type { TonClient } from "@ton/ton";
import { useState } from "react";

import { getEmits } from "@/core";
import type { Hook, TransactionsLoaderProps } from "@/types";

import { useAsyncEffect } from "./useAsyncEffect";

const useGetEmitsTx = <TLoader>(
    client: TonClient,
    options: TransactionsLoaderProps<TLoader> & Hook,
) => {
    const [data, setData] = useState<TLoader[]>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error>();

    useAsyncEffect(async () => {
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
    }, [client, options]);

    return {
        data,
        loading,
        error,
    };
};

export { useGetEmitsTx };
