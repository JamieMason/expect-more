import { isRegExp } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that a value is a regular expression.
       * @param other
       * @example
       * expect(onPress).toHaveBeenCalledWith(
       *   expect.objectContaining({
       *     pattern: expect.toBeRegExp()
       *   })
       * );
       */
      toBeRegExp<T>(): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * Asserts that a value is a regular expression.
       * @example
       * expect(/abc/).toBeRegExp();
       * expect(new RegExp('abc')).toBeRegExp();
       */
      toBeRegExp(): R;
    }
  }
}

export const toBeRegExpMatcher = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a regular expression`,
    notMessage: () => `expected ${received} not to be a regular expression`,
    pass: isRegExp(received)
  });

expect.extend({ toBeRegExp: toBeRegExpMatcher });
