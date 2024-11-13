import { useEffect } from "react";

const useAsyncEffect = <TDeps extends readonly unknown[]>(
    callback: () => Promise<void>,
    deps: TDeps,
) => {
    return useEffect(() => {
        (async () => {
            await callback();
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
};

export { useAsyncEffect };
