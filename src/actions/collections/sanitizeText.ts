import type { Action } from "../../types.ts";
import { stripTags } from "../stripTags.ts";
import { trim } from "../trim.ts";
import { stripNewlines } from "../stripNewlines.ts";

export type SanitizeTextAction = Action<string | null, string | null>;

export function sanitizeText(): SanitizeTextAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    input = stripTags()(input);
    input = stripNewlines()(input);
    input = trim()(input);

    return input;
  };
}
