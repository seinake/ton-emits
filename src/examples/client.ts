import { TonClient } from "@ton/ton";

const client = new TonClient({
    endpoint: "https://testnet.toncenter.com/api/v2/jsonRPC",
    apiKey: "", // Paste your apiKey here
});

export { client };
