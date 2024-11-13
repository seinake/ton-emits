import type { Address } from "@ton/core";

type TransactionProps = {
    address: Address;
    lt: string;
    hash: string;
};

type TransactionWaitProps = {
    address: Address;
    refetchInterval?: number;
    refetchLimit?: number;
};

export type { TransactionProps, TransactionWaitProps };
