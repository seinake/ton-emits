import type { Address } from "@ton/core";

import type { WithLoader } from "./loader";

/**
 * Properties required for a transaction.
 */
type TransactionProps = {
    address: Address;
    lt: string;
    hash: string;
};

/**
 * Combines `TransactionProps` with loader properties.
 * @template TLoader The type of the value returned by the loader.
 */
type TransactionLoaderProps<TLoader> = WithLoader<TransactionProps, TLoader>;

/**
 * Properties for waiting on a transaction.
 */
type TransactionWaitProps = {
    address: Address;
    refetchInterval?: number;
    refetchLimit?: number;
};

/**
 * Combines `TransactionWaitProps` with loader properties.
 * @template TLoader The type of the value returned by the loader.
 */
type TransactionWaitLoaderProps<TLoader> = WithLoader<TransactionWaitProps, TLoader>;

export type {
    TransactionProps,
    TransactionLoaderProps,
    TransactionWaitProps,
    TransactionWaitLoaderProps,
};
