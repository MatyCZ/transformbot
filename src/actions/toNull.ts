import type { Action } from "../types.ts";

export type ToNullAction<TInput, TOutput> = Action<TInput, TOutput>;

export function toNull<
  TInput extends boolean | number | string | undefined | null,
  TOutput = TInput,
>(): ToNullAction<TInput, TOutput | null> {
  return (input) => {
    if (input === undefined || input === null) {
      return null;
    }

    if (typeof input === "boolean" && !input) {
      return null;
    }

    if (typeof input === "number" && input === 0) {
      return null;
    }

    if (
      typeof input === "string" &&
      (input === "" || input === "0" || input === "0.0")
    ) {
      return null;
    }

    return input as TOutput;
  };
}
