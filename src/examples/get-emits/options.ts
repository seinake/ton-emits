import { Address } from "@ton/core";

import { loadEmitTest } from "../wrapper";

// Options with additional parameters
const options = {
    // The address of the contract
    address: Address.parse(""), // Replace with a valid address string
    // A header value, possibly a timestamp or block number
    header: 1480778918,
    // Additional options
    opts: {
        // Limit parameter, perhaps specifying the number of items to fetch
        limit: 10,
    },
    // The loader function
    loader: loadEmitTest,
};

// Hook options with additional parameters
const hookOptions = {
    // The address of the contract
    address: Address.parse(""), // Replace with a valid address string
    // A header value
    header: 1480778918,
    // Additional options
    opts: {
        limit: 10,
    },
    // The loader function
    loader: loadEmitTest,
    // Flag indicating whether the hook is enabled
    enabled: true,
};

export { options, hookOptions };
