type AnyFn = (...args: any[]) => any;

const curryFn = <F extends AnyFn>(fn: F, argsCache: any[], self: any) =>
  fn.length <= argsCache.length
    ? fn.apply(self, argsCache.slice(0, fn.length))
    : (...ys: any[]) => curryFn(fn, argsCache.concat(ys), self);

export const curry = <F extends AnyFn>(fn: F, self?: any) => curryFn(fn, [], self);
