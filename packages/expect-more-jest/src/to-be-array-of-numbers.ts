import { isArrayOfNumbers } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is an `Array` containing only `Number` values.
       * @example
       * expect([12, 0, 14]).toBeArrayOfNumbers();
       */
      toBeArrayOfNumbers(): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is an `Array` containing only `Number` values.
       * @example
       * expect([12, 0, 14]).toEqual(
       *   expect.toBeArrayOfNumbers()
       * );
       */
      toBeArrayOfNumbers<T>(): JestMatchers<T>;
    }
  }
}

export const toBeArrayOfNumbersMatcher = (value: any) =>
  createResult({
    message: () =>
      `expected ${printReceived(value)} to be a non-empty array, containing only numbers`,
    notMessage: () =>
      `expected ${printReceived(value)} not to be a non-empty array, containing only numbers`,
    pass: isArrayOfNumbers(value),
  });

expect.extend({ toBeArrayOfNumbers: toBeArrayOfNumbersMatcher });
