import type { Address } from "@ton/core";

import type { WithLoader } from "./loader";

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

type TransactionsLoaderProps<TLoader> = WithLoader<TransactionsProps, TLoader>;

export type { TransactionsProps, TransactionsLoaderProps };
