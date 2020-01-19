import { isArrayOfObjects } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is an `Array` containing only `Object` values.
       * @example
       * expect([{}, new Object()]).toBeArrayOfObjects();
       */
      toBeArrayOfObjects(): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is an `Array` containing only `Object` values.
       * @example
       * expect([{}, new Object()]).toEqual(
       *   expect.toBeArrayOfObjects()
       * );
       */
      toBeArrayOfObjects<T>(): JestMatchers<T>;
    }
  }
}

export const toBeArrayOfObjectsMatcher = (value: any) =>
  createResult({
    message: () => `expected ${value} to be a non-empty array, containing only objects`,
    notMessage: () => `expected ${value} not to be a non-empty array, containing only objects`,
    pass: isArrayOfObjects(value),
  });

expect.extend({ toBeArrayOfObjects: toBeArrayOfObjectsMatcher });
