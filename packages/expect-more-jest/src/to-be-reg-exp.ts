import { isRegExp } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a `RegExp`.
       * @example
       * expect(new RegExp('i am a regular expression')).toBeRegExp();
       */
      toBeRegExp(): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a `RegExp`.
       * @example
       * expect(new RegExp('i am a regular expression')).toEqual(
       *   expect.toBeRegExp()
       * );
       */
      toBeRegExp<T>(): JestMatchers<T>;
    }
  }
}

export const toBeRegExpMatcher = (value: any) =>
  createResult({
    message: () => `expected ${printReceived(value)} to be a regular expression`,
    notMessage: () => `expected ${printReceived(value)} not to be a regular expression`,
    pass: isRegExp(value),
  });

expect.extend({ toBeRegExp: toBeRegExpMatcher });
