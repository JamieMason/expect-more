import { isNil } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is `null` or `undefined`
       * @example
       * expect(undefined).toBeNil();
       */
      toBeNil(): R;
    }
    interface Expect {
      /**
       * Asserts that a value is `null` or `undefined`
       * @example
       * expect(undefined).toEqual(
       *   expect.toBeNil()
       * );
       */
      toBeNil<T>(): JestMatchers<T>;
    }
  }
}

export const toBeNilMatcher = (value: unknown): jest.CustomMatcherResult =>
  createResult({
    message: () => `expected ${printReceived(value)} to be null or undefined`,
    notMessage: () => `expected ${printReceived(value)} not to be null or undefined`,
    pass: isNil(value),
  });

expect.extend({ toBeNil: toBeNilMatcher });
