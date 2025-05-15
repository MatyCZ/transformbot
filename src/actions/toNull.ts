import type { Action } from "../types.ts";

export type ToNullAction<TInput, TOutput> = Action<TInput, TOutput>;

export function toNull<
  TInput extends Date | boolean | number | string | undefined | null,
  TOutput = TInput,
>(): ToNullAction<TInput, TOutput | null> {
  return (input) => {
    if (input === null) {
      return null;
    }

    if (input instanceof Date && input.getTime() === 0) {
      return null;
    }

    if (typeof input === "boolean" && !input) {
      return null;
    }

    if (typeof input === "number" && (input === 0 || input === 0.0)) {
      return null;
    }

    if (typeof input === "string" && input === "") {
      return null;
    }

    return input as TOutput;
  };
}
