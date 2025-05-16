import type { Action } from "../types.ts";

export type ToUndefinedAction<TInput, TOutput> = Action<TInput, TOutput>;

export function toUndefined<
  TInput extends Date | boolean | number | string | null,
  TOutput = NonNullable<TInput>,
>(): ToUndefinedAction<TInput, TOutput | undefined> {
  return (input) => {
    if (input === null) {
      return undefined;
    }

    if (input instanceof Date && input.getTime() === 0) {
      return undefined;
    }

    if (typeof input === "number" && (input === 0 || input === 0.0)) {
      return undefined;
    }

    if (typeof input === "string" && input === "") {
      return undefined;
    }

    return input as TOutput;
  };
}
