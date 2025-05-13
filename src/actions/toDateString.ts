import type { Action } from "../types.ts";
import { addLeadingZeros } from "../utils/addLeadingZeros.ts";

export type ToDateStringAction = Action<Date, string>;

export function toDateString(): ToDateStringAction {
  return (input) => {
    return (
      input.getFullYear() +
      "-" +
      addLeadingZeros(input.getMonth() + 1, 2) +
      "-" +
      addLeadingZeros(input.getDate(), 2)
    );
  };
}
