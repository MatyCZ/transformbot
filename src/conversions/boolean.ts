import { Conversion } from "../types.ts";

export type BooleanConversion = Conversion<unknown, boolean | null>;

export function boolean(): BooleanConversion {
  return (input) => {
    if (input === null || input === undefined || input === "") {
      return null;
    }

    if (typeof input === "string") {
      const lowered = input.trim().toLowerCase();

      if (lowered === "true" || lowered === "1" || lowered === "yes") {
        return true;
      }

      if (lowered === "false" || lowered === "0" || lowered === "no") {
        return false;
      }

      return null;
    }

    if (typeof input === "number" || typeof input === "boolean") {
      return Boolean(input);
    }

    return null;
  };
}
