import { Conversion } from "../types.ts";

export type NumberConversion = Conversion<unknown, number>;

export function number(): NumberConversion {
  return (input) => {
    if (input === null || input === undefined || input === "") {
      return 0;
    }

    if (typeof input === "number") {
      return isNaN(input) ? 0 : input;
    }

    if (typeof input === "string") {
      let normalized = input.replace(/[\s\u00A0]+/g, "");
      normalized = normalized.replace(",", ".");

      const num = Number(normalized);

      return isNaN(num) ? 0 : num;
    }

    return 0;
  };
}
