import type { Address } from "@ton/core";

import type { WithLoader } from "./loader";

/**
 * Properties for fetching transactions.
 */
type TransactionsProps = {
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

/**
 * Combines `TransactionsProps` with loader properties.
 * @template TLoader The type of the value returned by the loader.
 */
type TransactionsLoaderProps<TLoader> = WithLoader<TransactionsProps, TLoader>;

export type { TransactionsProps, TransactionsLoaderProps };
