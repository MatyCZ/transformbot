import { Conversion } from "../types.ts";

export type StringConversion = Conversion<unknown, string | null>;

export function string(): StringConversion {
  return (input) => {
    if (
      input === null ||
      input === undefined ||
      typeof input === "bigint" ||
      typeof input === "boolean" ||
      typeof input === "function" ||
      typeof input === "object" ||
      typeof input === "symbol" ||
      Array.isArray(input) ||
      Number.isNaN(input)
    ) {
      return null;
    }

    return String(input);
  };
}
