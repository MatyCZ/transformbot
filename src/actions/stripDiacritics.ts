import type { Action } from "../types.ts";

export function stripDiacritics<TInput extends string, TOutput = TInput>(): Action<TInput, TOutput> {
  return (input) => {
    return input.normalize("NFD").replace(/[\u0300-\u036f]/g, "") as TOutput;
  };
}
