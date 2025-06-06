import type { Action } from "../types.ts";

export type ToNullAction<TInput, TOutput> = Action<TInput, TOutput>;

export interface ToNullOptions {
  skipArray?: boolean;
  skipDate?: boolean;
  skipNumber?: boolean;
  skipString?: boolean;
}

export function toNull<TInput, TOutput = TInput>(
  options?: ToNullOptions,
): ToNullAction<TInput, TOutput | null> {
  return (input) => {
    if (input === null) {
      return null;
    }

    if (
      true !== options?.skipDate &&
      input instanceof Date &&
      input.getTime() === 0
    ) {
      return null;
    }

    if (
      true !== options?.skipNumber &&
      typeof input === "number" &&
      (input === 0 || input === 0.0)
    ) {
      return null;
    }

    if (
      true !== options?.skipString &&
      typeof input === "string" &&
      input === ""
    ) {
      return null;
    }

    if (
      true !== options?.skipArray &&
      Array.isArray(input) &&
      input.length === 0
    ) {
      return null;
    }

    return input as TOutput;
  };
}
