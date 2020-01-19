import { isNonEmptyArray } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is an `Array` containing at least one value.
       * @example
       * expect(['i', 'am not empty']).toBeNonEmptyArray();
       */
      toBeNonEmptyArray(): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is an `Array` containing at least one value.
       * @example
       * expect(['i', 'am not empty']).toEqual(
       *   expect.toBeNonEmptyArray()
       * );
       */
      toBeNonEmptyArray<T>(): JestMatchers<T>;
    }
  }
}

export const toBeNonEmptyArrayMatcher = (value: any) =>
  createResult({
    message: () => `expected ${value} to be an array with at least one item`,
    notMessage: () => `expected ${value} not to be an array with at least one item`,
    pass: isNonEmptyArray(value),
  });

expect.extend({ toBeNonEmptyArray: toBeNonEmptyArrayMatcher });
