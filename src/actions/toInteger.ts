import type { Action } from "../types.ts";

export function toInteger<TInput extends number | string, TOutput extends number>(): Action<TInput, TOutput> {
  return (input) => {
    if (input === null || input === undefined || input === "") {
      return 0 as unknown as TOutput;
    }

    const num = typeof input === "string" ? parseFloat(input as string) : (input as number);

    return (isNaN(num) ? 0 : Math.trunc(num)) as unknown as TOutput;
  };
}
