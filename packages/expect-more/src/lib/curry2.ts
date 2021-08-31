import { CurriedFn1, curry1 } from './curry1';

type Fn2<R = any> = (b: unknown, a: unknown) => a is R;

export type CurriedFn2<R = any> = {
  (b: unknown, a: unknown): a is R;
  (b: unknown): CurriedFn1<R>;
};

export function curry2<R>(fn: Fn2<R>): CurriedFn2<R> {
  return function curriedFn2(b, a) {
    const len = arguments.length;
    if (len >= 2) return fn(b, a);
    if (len >= 1) return curry1<R>(fn.bind(null, b));
  } as CurriedFn2<R>;
}
