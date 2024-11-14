import { Address } from "@ton/core";

import { loadEmitTest } from "../wrapper";

const options = {
    address: Address.parse("kQDW0Z9lJ07cFn08-MK9V5ggrOE7eya67tN4IHTAg28zANSJ"),
    lt: "27073395000001",
    hash: "XiOF7GKtm/wK4nEWxZ1nIGCEYi9hS2MA0JoMEzC2/84=",
    loader: loadEmitTest,
};

const hookOptions = {
    address: Address.parse("kQDW0Z9lJ07cFn08-MK9V5ggrOE7eya67tN4IHTAg28zANSJ"),
    lt: "27073395000001",
    hash: "XiOF7GKtm/wK4nEWxZ1nIGCEYi9hS2MA0JoMEzC2/84=",
    loader: loadEmitTest,
    enabled: true,
};

export { options, hookOptions };
