import { Address } from "@ton/core";

import { loadEmitTest } from "../wrapper";

// Options specifying logical time and hash
const options = {
    // The address of the contract
    address: Address.parse(""), // Replace with a valid address string
    // Logical time, possibly representing a specific state of the blockchain
    lt: "", // Replace with a valid logical time string
    // Hash value, potentially of a block or transaction
    hash: "", // Replace with a valid hash string
    // The loader function
    loader: loadEmitTest,
};

// Hook options specifying logical time and hash
const hookOptions = {
    // The address of the contract
    address: Address.parse(""), // Replace with a valid address string
    // Logical time
    lt: "", // Replace with a valid logical time string
    // Hash value
    hash: "", // Replace with a valid hash string
    // The loader function
    loader: loadEmitTest,
    // Flag indicating whether the hook is enabled
    enabled: true,
};

export { options, hookOptions };
