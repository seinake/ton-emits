import { Address } from "@ton/core";

import type { Hook, TransactionWaitLoaderProps } from "@/types";

import type { EmitTest } from "../wrapper";
import { loadEmitTest } from "../wrapper";

const options = {
    address: Address.parse("kQDW0Z9lJ07cFn08-MK9V5ggrOE7eya67tN4IHTAg28zANSJ"),
    loader: loadEmitTest,
} satisfies TransactionWaitLoaderProps<EmitTest>;

const hookOptions = {
    address: Address.parse("kQDW0Z9lJ07cFn08-MK9V5ggrOE7eya67tN4IHTAg28zANSJ"),
    loader: loadEmitTest,
    enabled: true,
} satisfies TransactionWaitLoaderProps<EmitTest> & Hook;

export { options, hookOptions };
