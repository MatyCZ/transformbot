import type { Action } from "../types.ts";

export function toAlphanumeric<TInput extends string, TOutput = TInput>(): Action<TInput, TOutput> {
  return (input) => {
    return input.replace(/[^a-zA-Z0-9]/g, "") as TOutput;
  };
}
