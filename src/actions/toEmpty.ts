import type { Action } from "../types.ts";

export function toEmpty<
  TInput extends string | undefined | null,
  TOutput extends string,
>(): Action<TInput, TOutput> {
  return (input) => {
    if (input === undefined || input === null) {
      return "" as TOutput;
    }

    return input as unknown as TOutput;
  };
}
