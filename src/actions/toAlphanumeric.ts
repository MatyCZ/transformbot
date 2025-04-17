import type { Action } from "../types.ts";

export type ToAlphanumericAction = Action<string, string>;

export function toAlphanumeric(): ToAlphanumericAction {
  return (input) => {
    return input.replace(/[^a-zA-Z0-9]/g, "");
  };
}
