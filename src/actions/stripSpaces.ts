import type { Action } from "../types.ts";

export function stripSpaces<TInput extends string, TOutput = TInput>(): Action<TInput, TOutput> {
  return (input) => {
    return input.replace(/\s/g, "") as TOutput;
  };
}
