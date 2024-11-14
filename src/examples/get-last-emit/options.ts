import { Address } from "@ton/core";

import { loadEmitTest } from "../wrapper";

// Options for method invocation
const options = {
    // The address of the contract, parsed from a string
    address: Address.parse(""), // Replace with a valid address string
    // The loader function used to process data
    loader: loadEmitTest,
};

// Options for use within a hook
const hookOptions = {
    // The address of the contract
    address: Address.parse(""), // Replace with a valid address string
    // The loader function
    loader: loadEmitTest,
    // Flag indicating whether the hook is enabled
    enabled: true,
};

export { options, hookOptions };
