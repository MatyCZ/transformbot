import type { Action } from "../types.ts";

export function stripNewlines<TInput extends string, TOutput = TInput>(): Action<TInput, TOutput> {
  return (input) => {
    return input.replace(/\r?\n|\r/g, "") as TOutput;
  };
}
