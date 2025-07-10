import type { Action } from "../types.ts";

export type DecodeHTMLAction = Action<string | null, string | null>;

export function decodeHTML(): DecodeHTMLAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    const map: Record<string, string> = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#039;": "'",
    };

    return input.replace(/&amp;|&lt;|&gt;|&quot;|&#039;/g, (m) => map[m]);
  };
}
