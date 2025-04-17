import { Conversion } from "../types.ts";

export type StringConversion = Conversion<unknown, string>;

export function string(): StringConversion {
  return (input) => {
    if (input === null || input === undefined) {
      return "";
    }

    if (typeof input === "object") {
      return "";
    }

    return String(input);
  };
}
