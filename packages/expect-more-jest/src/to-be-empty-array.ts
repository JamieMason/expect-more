import { isEmptyArray } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is a valid `Array` containing no items.
       * @example
       * expect([]).toBeEmptyArray();
       */
      toBeEmptyArray(): R;
    }
    interface Expect {
      /**
       * Asserts that a value is a valid `Array` containing no items.
       * @example
       * expect([]).toEqual(
       *   expect.toBeEmptyArray()
       * );
       */
      toBeEmptyArray<T>(): JestMatchers<T>;
    }
  }
}

export const toBeEmptyArrayMatcher = (value: unknown): jest.CustomMatcherResult =>
  createResult({
    message: () => `expected ${printReceived(value)} to be an array containing no items`,
    notMessage: () => `expected ${printReceived(value)} not to be an array containing no items`,
    pass: isEmptyArray(value),
  });

expect.extend({ toBeEmptyArray: toBeEmptyArrayMatcher });
