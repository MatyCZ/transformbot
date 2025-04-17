import type { Action } from "../types.ts";

export function toLowerCase<TInput extends string, TOutput = TInput>(): Action<TInput, TOutput> {
  return (input) => {
    return input.toLowerCase() as TOutput;
  };
}
