import type { Address } from "@ton/core";

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

export type { TransactionsProps };
