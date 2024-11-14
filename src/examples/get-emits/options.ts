import { Address } from "@ton/core";

import { loadEmitTest } from "../wrapper";

const options = {
    // The address of the contract
    address: Address.parse(""), // Replace with a valid address string
    // A header value from loader
    header: 1480778918,
    // Additional options
    opts: {
        // Limit parameter
        limit: 10,
    },
    // The loader function
    loader: loadEmitTest,
};

const hookOptions = {
    // The address of the contract
    address: Address.parse(""), // Replace with a valid address string
    // A header value from loader
    header: 1480778918,
    // Additional options
    opts: {
        // Limit parameter
        limit: 10,
    },
    // The loader function
    loader: loadEmitTest,
    // Flag indicating whether the hook is enabled
    enabled: true,
};

export { options, hookOptions };
