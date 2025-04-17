import type { Action } from "../types.ts";

export default function trim<TInput extends string, TOutput = TInput>(): Action<TInput, TOutput> {
  return (input) => {
    return input.trim() as TOutput;
  };
}
