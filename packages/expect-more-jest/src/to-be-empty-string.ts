import { isEmptyString } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is a valid `String` containing no characters.
       * @example
       * expect('').toBeEmptyString();
       */
      toBeEmptyString(): R;
    }
    interface Expect {
      /**
       * Asserts that a value is a valid `String` containing no characters.
       * @example
       * expect('').toEqual(
       *   expect.toBeEmptyString()
       * );
       */
      toBeEmptyString<T>(): JestMatchers<T>;
    }
  }
}

export const toBeEmptyStringMatcher = (value: unknown): jest.CustomMatcherResult =>
  createResult({
    message: () =>
      `expected ${printReceived(value)} to be an empty string or empty instance of String`,
    notMessage: () =>
      `expected ${printReceived(value)} not to be an empty string or empty instance of String`,
    pass: isEmptyString(value),
  });

expect.extend({ toBeEmptyString: toBeEmptyStringMatcher });
