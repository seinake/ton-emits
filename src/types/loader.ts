import type { Slice } from "@ton/core";

type Loader<TLoader> = (slice: Slice) => TLoader;

type LoaderProps<TLoader> = {
    loader: Loader<TLoader>;
};

type WithLoader<TProps, TLoader> = TProps & LoaderProps<TLoader>;

export type { Loader, LoaderProps, WithLoader };
