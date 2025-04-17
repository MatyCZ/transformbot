import type { Action } from "../types.ts";

export function toDigits<TInput extends string, TOutput = TInput>(): Action<TInput, TOutput> {
  return (input) => {
    return input.replace(/\D/g, "") as TOutput;
  };
}
