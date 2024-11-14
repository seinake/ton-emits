import { Address } from "@ton/core";

import { loadEmitTest } from "../wrapper";

const options = {
    address: Address.parse("kQDW0Z9lJ07cFn08-MK9V5ggrOE7eya67tN4IHTAg28zANSJ"),
    header: 1480778918,
    opts: {
        limit: 10,
    },
    loader: loadEmitTest,
};

const hookOptions = {
    address: Address.parse("kQDW0Z9lJ07cFn08-MK9V5ggrOE7eya67tN4IHTAg28zANSJ"),
    header: 1480778918,
    opts: {
        limit: 10,
    },
    loader: loadEmitTest,
    enabled: true,
};

export { options, hookOptions };
