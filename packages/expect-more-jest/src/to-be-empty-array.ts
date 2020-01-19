import { isEmptyArray } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a valid `Array` containing no items.
       * @example
       * expect([]).toBeEmptyArray();
       */
      toBeEmptyArray(): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a valid `Array` containing no items.
       * @example
       * expect([]).toEqual(
       *   expect.toBeEmptyArray()
       * );
       */
      toBeEmptyArray<T>(): JestMatchers<T>;
    }
  }
}

export const toBeEmptyArrayMatcher = (value: any) =>
  createResult({
    message: () => `expected ${value} to be an array containing no items`,
    notMessage: () => `expected ${value} not to be an array containing no items`,
    pass: isEmptyArray(value),
  });

expect.extend({ toBeEmptyArray: toBeEmptyArrayMatcher });
