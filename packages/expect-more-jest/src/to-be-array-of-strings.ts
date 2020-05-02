import { isArrayOfStrings } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is an `Array` containing only `String` values.
       * @example
       * expect(['we', 'are', 'all', 'strings']).toBeArrayOfStrings();
       */
      toBeArrayOfStrings(): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is an `Array` containing only `String` values.
       * @example
       * expect(['we', 'are', 'all', 'strings']).toEqual(
       *   expect.toBeArrayOfStrings()
       * );
       */
      toBeArrayOfStrings<T>(): JestMatchers<T>;
    }
  }
}

export const toBeArrayOfStringsMatcher = (value: any) =>
  createResult({
    message: () =>
      `expected ${printReceived(value)} to be a non-empty array, containing only strings`,
    notMessage: () =>
      `expected ${printReceived(value)} not to be a non-empty array, containing only strings`,
    pass: isArrayOfStrings(value),
  });

expect.extend({ toBeArrayOfStrings: toBeArrayOfStringsMatcher });
