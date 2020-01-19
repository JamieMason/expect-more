import { isObject } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is an `Object`.
       * @example
       * expect({}).toBeObject();
       */
      toBeObject(): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is an `Object`.
       * @example
       * expect({}).toEqual(
       *   expect.toBeObject()
       * );
       */
      toBeObject<T>(): JestMatchers<T>;
    }
  }
}

export const toBeObjectMatcher = (value: any) =>
  createResult({
    message: () => `expected ${value} to be an object`,
    notMessage: () => `expected ${value} not to be an object`,
    pass: isObject(value),
  });

expect.extend({ toBeObject: toBeObjectMatcher });
