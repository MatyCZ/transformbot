import { Conversion } from "../types.ts";

export type DateConversion = Conversion<unknown, Date | null>;

export function date(): DateConversion {
  return (input) => {
    if (input === null || input === undefined || input === "") {
      return null;
    }

    if (input instanceof Date) {
      return isNaN(input.getTime()) ? null : input;
    }

    if (typeof input === "number" || typeof input === "string") {
      const dateObj = new Date(input);
      return isNaN(dateObj.getTime()) ? null : dateObj;
    }

    return null;
  };
}
