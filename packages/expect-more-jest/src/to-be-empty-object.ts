import { isEmptyObject } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a valid `Object` containing no instance members.
       * @example
       * expect({}).toBeEmptyObject();
       */
      toBeEmptyObject(): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a valid `Object` containing no instance members.
       * @example
       * expect({}).toEqual(
       *   expect.toBeEmptyObject()
       * );
       */
      toBeEmptyObject<T>(): JestMatchers<T>;
    }
  }
}

export const toBeEmptyObjectMatcher = (value: any) =>
  createResult({
    message: () => `expected ${value} to be an empty object`,
    notMessage: () => `expected ${value} not to be an empty object`,
    pass: isEmptyObject(value),
  });

expect.extend({ toBeEmptyObject: toBeEmptyObjectMatcher });
