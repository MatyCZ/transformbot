import type { Action } from "../types.ts";

export function toUpperCase<TInput extends string, TOutput = TInput>(): Action<TInput, TOutput> {
  return (input) => {
    return input.toUpperCase() as TOutput;
  };
}
