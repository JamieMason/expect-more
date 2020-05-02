import { isArrayOfSize } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is an `Array` containing ${size} number of values.
       * @example
       * expect(['i', 'contain', 4, 'items']).toBeArrayOfSize(4);
       */
      toBeArrayOfSize(size: number): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is an `Array` containing ${size} number of values.
       * @example
       * expect(['i', 'contain', 4, 'items']).toEqual(
       *   expect.toBeArrayOfSize(4)
       * );
       */
      toBeArrayOfSize<T>(size: number): JestMatchers<T>;
    }
  }
}

export const toBeArrayOfSizeMatcher = (value: any, size: number) =>
  createResult({
    message: () =>
      `expected ${printReceived(value)} to be an array containing exactly ${printExpected(
        size,
      )} items`,
    notMessage: () =>
      `expected ${printReceived(value)} not to be an array containing exactly ${printExpected(
        size,
      )} items`,
    pass: isArrayOfSize(size, value),
  });

expect.extend({ toBeArrayOfSize: toBeArrayOfSizeMatcher });
