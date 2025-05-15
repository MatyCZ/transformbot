import type { Action } from "../types.ts";
import { addLeadingZeros } from "../utils/addLeadingZeros.ts";

export type ToDateStringAction = Action<Date | null, string | null>;

export function toDateString(): ToDateStringAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    return (
      input.getFullYear() +
      "-" +
      addLeadingZeros(input.getMonth() + 1, 2) +
      "-" +
      addLeadingZeros(input.getDate(), 2)
    );
  };
}
