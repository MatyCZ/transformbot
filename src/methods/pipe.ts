import type { Action, Schema } from "../types.ts";

export function pipe<A, B>(schema: Schema<A, B>): Action<A, B>;
export function pipe<A, B, C>(schema: Schema<A, B>, action1: Action<B, C>): Action<A, C>;
export function pipe<A, B, C, D>(schema: Schema<A, B>, action1: Action<B, C>, action2: Action<C, D>): Action<A, D>;
export function pipe<A, B, C, D, E>(
  schema: Schema<A, B>,
  action1: Action<B, C>,
  action2: Action<C, D>,
  action3: Action<D, E>,
): Action<A, E>;
export function pipe<A, B, C, D, E, F>(
  schema: Schema<A, B>,
  action1: Action<B, C>,
  action2: Action<C, D>,
  action3: Action<D, E>,
  action4: Action<E, F>,
): Action<A, F>;
export function pipe<A, B, C, D, E, F, G>(
  schema: Schema<A, B>,
  action1: Action<B, C>,
  action2: Action<C, D>,
  action3: Action<D, E>,
  action4: Action<E, F>,
  action5: Action<F, G>,
): Action<A, G>;
export function pipe(...transformations: Action[]): Action {
  return (input: unknown) => {
    return transformations.reduce((value, transformation) => transformation(value), input);
  };
}
