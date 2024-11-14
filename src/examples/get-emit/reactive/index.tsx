import type { FC } from "react";

import { useGetEmit } from "@/hooks";

import { client } from "../../client";
import { hookOptions } from "../options";

const Component: FC = () => {
    const { data, loading, error } = useGetEmit(client, hookOptions);

    return (
        <div>
            {loading && <h1>Loading</h1>}
            {error && <h1>Error: {error.message}</h1>}
            {data && <h1>{JSON.stringify(data)}</h1>}
        </div>
    );
};

export { Component };