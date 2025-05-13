import type { Action } from "../types.ts";

export type ToUndefinedAction<TInput, TOutput> = Action<TInput, TOutput>;

export function toUndefined<
  TInput extends Date | boolean | number | string | undefined | null,
  TOutput = TInput,
>(): ToUndefinedAction<TInput, TOutput | undefined> {
  return (input) => {
    if (input === undefined || input === null) {
      return undefined;
    }

    if (input instanceof Date && input.getTime() === 0) {
      return undefined;
    }

    if (typeof input === "boolean" && !input) {
      return undefined;
    }

    if (typeof input === "number" && (input === 0 || input === 0.0)) {
      return undefined;
    }

    if (
      typeof input === "string" &&
      (input === "" ||
        input === "0" ||
        input === "0.0" ||
        input === "1970-01-01" ||
        input === "00:00" ||
        input === "00:00:00" ||
        input === "00:00:00.000")
    ) {
      return undefined;
    }

    return input as TOutput;
  };
}
