import type { Action, Conversion, Transformation } from "../types.ts";

export function pipe<A, B>(conversion: Conversion<A, B>): Transformation<A, B>;
export function pipe<A, B, C>(
  conversion: Conversion<A, B>,
  action1: Action<B, C>,
): Transformation<A, C>;
export function pipe<A, B, C, D>(
  conversion: Conversion<A, B>,
  action1: Action<B, C>,
  action2: Action<C, D>,
): Transformation<A, D>;
export function pipe<A, B, C, D, E>(
  conversion: Conversion<A, B>,
  action1: Action<B, C>,
  action2: Action<C, D>,
  action3: Action<D, E>,
): Transformation<A, E>;
export function pipe<A, B, C, D, E, F>(
  conversion: Conversion<A, B>,
  action1: Action<B, C>,
  action2: Action<C, D>,
  action3: Action<D, E>,
  action4: Action<E, F>,
): Transformation<A, F>;
export function pipe<A, B, C, D, E, F, G>(
  conversion: Conversion<A, B>,
  action1: Action<B, C>,
  action2: Action<C, D>,
  action3: Action<D, E>,
  action4: Action<E, F>,
  action5: Action<F, G>,
): Transformation<A, G>;
export function pipe<A, B, C, D, E, F, G, H>(
  conversion: Conversion<A, B>,
  action1: Action<B, C>,
  action2: Action<C, D>,
  action3: Action<D, E>,
  action4: Action<E, F>,
  action5: Action<F, G>,
  action6: Action<G, H>,
): Transformation<A, H>;
export function pipe<A, B, C, D, E, F, G, H, I>(
  conversion: Conversion<A, B>,
  action1: Action<B, C>,
  action2: Action<C, D>,
  action3: Action<D, E>,
  action4: Action<E, F>,
  action5: Action<F, G>,
  action6: Action<G, H>,
  action7: Action<H, I>,
): Transformation<A, I>;
export function pipe<A, B, C, D, E, F, G, H, I, J>(
  conversion: Conversion<A, B>,
  action1: Action<B, C>,
  action2: Action<C, D>,
  action3: Action<D, E>,
  action4: Action<E, F>,
  action5: Action<F, G>,
  action6: Action<G, H>,
  action7: Action<H, I>,
  action8: Action<I, J>,
): Transformation<A, J>;
export function pipe(...transformations: Transformation[]): Transformation {
  return (input: unknown) => {
    return transformations.reduce(
      (value, transformation) => transformation(value),
      input,
    );
  };
}
