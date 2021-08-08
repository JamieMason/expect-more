import type { AnyFn } from './typings';

/**
 * Asserts that ${value} is a `Function` which throws when invoked.
 * @param value () => { throw new Error("it wasn't me!") }
 * @matcherName toThrowAnyError
 * @memberMatcherName toHaveMethodThrowingAnyError
 * @matcherMessage expected ${value} to throw
 * @matcherNotMessage expected ${value} not to throw
 */
export const throwsAnyError = <T extends AnyFn = AnyFn>(value: T): value is T => {
  try {
    value();
    return false;
  } catch (err) {
    return true;
  }
};
