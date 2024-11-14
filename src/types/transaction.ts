import type { Address } from "@ton/core";

import type { WithLoader } from "./loader";

type TransactionProps = {
    address: Address;
    lt: string;
    hash: string;
};

type TransactionLoaderProps<TLoader> = WithLoader<TransactionProps, TLoader>;

type TransactionWaitProps = {
    address: Address;
    refetchInterval?: number;
    refetchLimit?: number;
};

type TransactionWaitLoaderProps<TLoader> = WithLoader<TransactionWaitProps, TLoader>;

export type {
    TransactionProps,
    TransactionLoaderProps,
    TransactionWaitProps,
    TransactionWaitLoaderProps,
};
