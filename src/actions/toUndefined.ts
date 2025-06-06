import type { Action } from "../types.ts";

export type ToUndefinedAction<TInput, TOutput> = Action<TInput, TOutput>;

export interface ToUndefinedOptions {
  skipArray?: boolean;
  skipDate?: boolean;
  skipNumber?: boolean;
  skipString?: boolean;
}

export function toUndefined<TInput, TOutput = NonNullable<TInput>>(
  options?: ToUndefinedOptions,
): ToUndefinedAction<TInput, TOutput | undefined> {
  return (input) => {
    if (input === null) {
      return undefined;
    }

    if (
      true !== options?.skipDate &&
      input instanceof Date &&
      input.getTime() === 0
    ) {
      return undefined;
    }

    if (
      true !== options?.skipNumber &&
      typeof input === "number" &&
      (input === 0 || input === 0.0)
    ) {
      return undefined;
    }

    if (
      true !== options?.skipString &&
      typeof input === "string" &&
      input === ""
    ) {
      return undefined;
    }

    if (
      true !== options?.skipArray &&
      Array.isArray(input) &&
      input.length === 0
    ) {
      return undefined;
    }

    return input as TOutput;
  };
}
