import type { Action } from "../types.ts";
import { addLeadingZeros } from "../utils/addLeadingZeros.ts";

export type ToTimeStringAction = Action<Date, string>;

export function toTimeString(
  useSeconds = true,
  useMiliseconds = false,
): ToTimeStringAction {
  return (input) => {
    let output =
      addLeadingZeros(input.getHours(), 2) +
      ":" +
      addLeadingZeros(input.getMinutes(), 2);

    if (useSeconds) {
      output += ":" + addLeadingZeros(input.getSeconds(), 2);
    }

    if (useMiliseconds) {
      output += "." + addLeadingZeros(input.getMilliseconds(), 3);
    }

    return output;
  };
}
