import type { TonClient } from "@ton/ton";
import { useState } from "react";

import { getEmits } from "@/core";
import type { Hook, TransactionsLoaderProps } from "@/types";

import { useAsyncEffect } from "./useAsyncEffect";

/**
 * Hook to fetch multiple emitted transactions and manage their loading state.
 *
 * @template TLoader - The type of the data returned by the loader.
 * @param client - The `TonClient` instance used to interact with the blockchain.
 * @param options - The options for fetching the transactions, including loader and transaction properties.
 * @returns An object containing the fetched data array, loading state, and any encountered error.
 */
const useGetEmits = <TLoader>(
    client: TonClient,
    options: TransactionsLoaderProps<TLoader> & Hook,
) => {
    const [data, setData] = useState<TLoader[]>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error>();

    useAsyncEffect(async () => {
        if (typeof options.enabled !== "undefined" && !options.enabled) return;
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

export { useGetEmits };
