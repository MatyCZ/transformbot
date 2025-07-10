import type { Action } from "../types.ts";

export type EncodeHTMLAction = Action<string | null, string | null>;

export function encodeHTML(): EncodeHTMLAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    const map: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };

    return input.replace(/[&<>"']/g, (m) => map[m]);
  };
}
