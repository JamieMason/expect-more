import { CurriedFn1, curry1 } from './curry1';
import { CurriedFn2, curry2 } from './curry2';

type Fn3<R = any> = (c: unknown, b: unknown, a: unknown) => a is R;

export type CurriedFn3<R = any> = {
  (c: unknown, b: unknown, a: unknown): a is R;
  (c: unknown, b: unknown): CurriedFn1<R>;
  (c: unknown): CurriedFn2<R>;
};

export function curry3<R>(fn: Fn3<R>): CurriedFn3<R> {
  return function curriedFn3(c, b, a) {
    const len = arguments.length;
    if (len >= 3) return fn(c, b, a);
    if (len >= 2) return curry1<R>(fn.bind(null, c, b));
    if (len >= 1) return curry2<R>(fn.bind(null, c));
  } as CurriedFn3<R>;
}
