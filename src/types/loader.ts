import type { Slice } from "@ton/core";

/**
 * A function that processes a `Slice` and returns a value of type `TLoader`.
 * @template TLoader The type of the value returned by the loader.
 * @param slice The `Slice` to process.
 * @returns A value of type `TLoader`.
 */
type Loader<TLoader> = (slice: Slice) => TLoader;

/**
 * Properties that include a loader function.
 * @template TLoader The type of the value returned by the loader.
 */
type LoaderProps<TLoader> = {
    loader: Loader<TLoader>;
};

/**
 * Combines component properties with loader properties.
 * @template TProps The component's properties.
 * @template TLoader The type of the value returned by the loader.
 */
type WithLoader<TProps, TLoader> = TProps & LoaderProps<TLoader>;

export type { Loader, LoaderProps, WithLoader };
