import type { Address, Transaction } from "@ton/core";
import type { TonClient } from "@ton/ton";
import { useState, useEffect } from "react";

import { getEmits } from "@/core";

type Props = {
    address: Address;
    header: number;
    opts: {
        limit: number;
        lt?: string;
        hash?: string;
        to_lt?: string;
        inclusive?: boolean;
        archival?: boolean;
    };
};

const useGetEmitsTx = (client: TonClient, options: Props) => {
    const [data, setData] = useState<Transaction[]>();
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
