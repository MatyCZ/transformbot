import type { Action } from "../types.ts";

export type ToAlphaAction = Action<string, string>;

export function toAlpha(): ToAlphaAction {
  return (input) => {
    return input.replace(/[^a-zA-Z]/g, "");
  };
}
