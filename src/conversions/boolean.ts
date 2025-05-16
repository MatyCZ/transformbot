import { Conversion } from "../types.ts";

export type BooleanConversion = Conversion<unknown, boolean | null>;

export function boolean(): BooleanConversion {
  return (input) => {
    if (input === null || input === undefined || input === "") {
      return null;
    }

    if (typeof input === "boolean") {
      return Boolean(input);
    }

    if (typeof input === "number") {
      return 1 === input;
    }

    if (typeof input === "string") {
      const lowered = input.trim().toLowerCase();

      if (lowered === "true" || lowered === "1" || lowered === "yes") {
        return true;
      }

      if (lowered === "false" || lowered === "0" || lowered === "no") {
        return false;
      }
    }

    return null;
  };
}
