import type { Action } from "../types.ts";

export function stripMultiSpaces<TInput extends string, TOutput = TInput>(): Action<TInput, TOutput> {
  return (input) => {
    return input.replace(/\s\s+/, " ") as TOutput;
  };
}
