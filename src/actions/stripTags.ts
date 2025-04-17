import type { Action } from "../types.ts";

export function stripTags<TInput extends string, TOutput = TInput>(): Action<TInput, TOutput> {
  return (input) => {
    return input.replace(/(<([^>]+)>)/gi, "") as TOutput;
  };
}
