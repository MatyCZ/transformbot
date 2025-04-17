import { Conversion } from "../types.ts";

export type NumberConversion = Conversion<unknown, number>;

export function number(): NumberConversion {
  return (input) => {
    if (input === null || input === undefined || input === "") {
      return 0;
    }

    const num = Number(input);

    return isNaN(num) ? 0 : num;
  };
}
