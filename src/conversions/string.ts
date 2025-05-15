import { Conversion } from "../types.ts";

export type StringConversion = Conversion<unknown, string | null>;

export function string(): StringConversion {
  return (input) => {
    if (input === null || input === undefined) {
      return null;
    }

    if (typeof input === "object") {
      return null;
    }

    return String(input);
  };
}
