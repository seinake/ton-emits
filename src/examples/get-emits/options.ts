import { Address } from "@ton/core";

import type { Hook, TransactionsLoaderProps } from "@/types";

import type { EmitTest } from "../wrapper";
import { loadEmitTest } from "../wrapper";

const options = {
    address: Address.parse("kQDW0Z9lJ07cFn08-MK9V5ggrOE7eya67tN4IHTAg28zANSJ"),
    header: 1480778918,
    opts: {
        limit: 10,
    },
    loader: loadEmitTest,
} satisfies TransactionsLoaderProps<EmitTest>;

const hookOptions = {
    address: Address.parse("kQDW0Z9lJ07cFn08-MK9V5ggrOE7eya67tN4IHTAg28zANSJ"),
    header: 1480778918,
    opts: {
        limit: 10,
    },
    loader: loadEmitTest,
    enabled: true,
} satisfies TransactionsLoaderProps<EmitTest> & Hook;

export { options, hookOptions };
