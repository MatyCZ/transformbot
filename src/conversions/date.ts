import { Conversion } from "../types.ts";

export type DateConversion = Conversion<unknown, Date>;

export function date(): DateConversion {
  return (input) => {
    const defaultDate = new Date(0);

    if (input === null || input === undefined || input === "") {
      return defaultDate;
    }

    if (input instanceof Date) {
      return isNaN(input.getTime()) ? defaultDate : input;
    }

    if (typeof input === "number") {
      const dateObj = new Date(input);
      return isNaN(dateObj.getTime()) ? defaultDate : dateObj;
    }

    if (typeof input === "string") {
      const dateObj = new Date(input);
      return isNaN(dateObj.getTime()) ? defaultDate : dateObj;
    }

    return defaultDate;
  };
}
