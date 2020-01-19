import { isArrayOfBooleans } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is an `Array` containing only `Boolean` values.
       * @example
       * expect([true, false, new Boolean(true)]).toBeArrayOfBooleans();
       */
      toBeArrayOfBooleans(): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is an `Array` containing only `Boolean` values.
       * @example
       * expect([true, false, new Boolean(true)]).toEqual(
       *   expect.toBeArrayOfBooleans()
       * );
       */
      toBeArrayOfBooleans<T>(): JestMatchers<T>;
    }
  }
}

export const toBeArrayOfBooleansMatcher = (value: any) =>
  createResult({
    message: () => `expected ${value} to be a non-empty array, containing only boolean values`,
    notMessage: () =>
      `expected ${value} not to be a non-empty array, containing only boolean values`,
    pass: isArrayOfBooleans(value),
  });

expect.extend({ toBeArrayOfBooleans: toBeArrayOfBooleansMatcher });
