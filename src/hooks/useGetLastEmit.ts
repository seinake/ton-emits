import type { TonClient } from "@ton/ton";
import { useState } from "react";

import { getLastEmit } from "@/core";
import type { Hook, TransactionWaitLoaderProps } from "@/types";

import { useAsyncEffect } from "./useAsyncEffect";

const useGetLastEmit = <TLoader>(
    client: TonClient,
    options: TransactionWaitLoaderProps<TLoader> & Hook,
) => {
    const [data, setData] = useState<TLoader>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error>();

    useAsyncEffect(async () => {
        if (typeof options.enabled !== "undefined" && !options.enabled) return;
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
    }, [client, options]);

    return {
        data,
        loading,
        error,
    };
};

export { useGetLastEmit };