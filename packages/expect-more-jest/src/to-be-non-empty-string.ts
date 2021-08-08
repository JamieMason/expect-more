import { isNonEmptyString } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that ${value} is a valid `String` containing at least one character.
       * @example
       * expect('i am not empty').toBeNonEmptyString();
       */
      toBeNonEmptyString(): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a valid `String` containing at least one character.
       * @example
       * expect('i am not empty').toEqual(
       *   expect.toBeNonEmptyString()
       * );
       */
      toBeNonEmptyString<T>(): JestMatchers<T>;
    }
  }
}

export const toBeNonEmptyStringMatcher = (value: unknown): jest.CustomMatcherResult =>
  createResult({
    message: () => `expected ${printReceived(value)} to be a string with at least one character`,
    notMessage: () =>
      `expected ${printReceived(value)} not to be a string with at least one character`,
    pass: isNonEmptyString(value),
  });

expect.extend({ toBeNonEmptyString: toBeNonEmptyStringMatcher });
