import { Address } from "@ton/core";

import { loadEmitTest } from "../wrapper";

const options = {
    // The address of the contract
    address: Address.parse(""), // Replace with a valid address string
    // The loader function
    loader: loadEmitTest,
};

const hookOptions = {
    // The address of the contract
    address: Address.parse(""), // Replace with a valid address string
    // The loader function
    loader: loadEmitTest,
    // Flag indicating whether the hook is enabled
    enabled: true,
};

export { options, hookOptions };
