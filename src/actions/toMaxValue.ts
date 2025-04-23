import type { Action } from "../types.ts";

export type ToMaxValueType = number | Date;
export type ToMaxValueAction<TInput extends ToMaxValueType> = Action<
  TInput,
  TInput
>;

export function toMaxValue<
  TInput extends ToMaxValueType,
  TMaxValue extends TInput,
>(maxValue: TMaxValue): ToMaxValueAction<TInput> {
  return (input) => {
    return input > maxValue ? maxValue : input;
  };
}
