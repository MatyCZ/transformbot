import type { Action } from "../types.ts";

export function toAlpha<TInput extends string, TOutput = TInput>(): Action<TInput, TOutput> {
  return (input) => {
    return input.replace(/[^a-zA-Z]/g, "") as TOutput;
  };
}
