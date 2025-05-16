import { Conversion } from "../types.ts";

export type NumberConversion = Conversion<unknown, number | null>;

export function number(): NumberConversion {
  return (input) => {
    if (input === null || input === undefined || input === "") {
      return null;
    }

    if (typeof input === "bigint") {
      const num = Number(input);

      return isNaN(num) ? null : num;
    }

    if (typeof input === "number") {
      return isNaN(input) ? null : input;
    }

    if (typeof input === "string") {
      let normalized = input.replace(/[\s\u00A0]+/g, "");
      normalized = normalized.replace(",", ".");

      const num = Number(normalized);

      return isNaN(num) ? null : num;
    }

    return null;
  };
}
