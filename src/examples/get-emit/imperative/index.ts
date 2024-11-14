import { getEmit } from "@/core";

import { client } from "../../client";
import { options } from "../options";

const getData = async () => {
    try {
        const data = await getEmit(client, options);
        if (data) {
            console.log("Parsed transaction data:", data);
        } else {
            console.log("No emitted transaction found");
        }
    } catch (error) {
        console.error("Error fetching transaction:", error);
    }
};

getData();
