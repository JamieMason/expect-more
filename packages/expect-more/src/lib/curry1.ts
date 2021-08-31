type Fn1<R = any> = (a: unknown) => a is R;

export type CurriedFn1<R = any> = {
  (a: unknown): a is R;
};

export function curry1<R>(fn: Fn1<R>): CurriedFn1<R> {
  return function curriedFn1(a) {
    if (arguments.length >= 1) return fn(a);
  } as CurriedFn1<R>;
}
