import { isArrayOfSize } from 'expect-more';
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
    message: () => `expected ${value} to be an array containing exactly ${size} items`,
    notMessage: () => `expected ${value} not to be an array containing exactly ${size} items`,
    pass: isArrayOfSize(size, value),
  });

expect.extend({ toBeArrayOfSize: toBeArrayOfSizeMatcher });
