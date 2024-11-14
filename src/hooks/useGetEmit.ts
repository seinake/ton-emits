import type { TonClient } from "@ton/ton";
import { useState } from "react";

import { getEmit } from "@/core";
import type { Hook, TransactionLoaderProps } from "@/types";

import { useAsyncEffect } from "./useAsyncEffect";

/**
 * Hook to fetch a single emitted transaction and manage its loading state.
 *
 * @template TLoader - The type of the data returned by the loader.
 * @param client - The `TonClient` instance used to interact with the blockchain.
 * @param options - The options for fetching the transaction, including loader and transaction properties.
 * @returns An object containing the fetched data, loading state, and any encountered error.
 */

const useGetEmit = <TLoader>(
    client: TonClient,
    options: TransactionLoaderProps<TLoader> & Hook,
) => {
    const [data, setData] = useState<TLoader>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error>();

    useAsyncEffect(async () => {
        if (typeof options.enabled !== "undefined" && !options.enabled) return;
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
    }, [client, options]);

    return {
        data,
        loading,
        error,
    };
};

export { useGetEmit };
