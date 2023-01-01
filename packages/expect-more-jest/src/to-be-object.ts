/// <reference types="jest" />

import { isObject } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is an `Object`.
       * @example
       * expect({}).toBeObject();
       */
      toBeObject(): R;
    }
    interface Expect {
      /**
       * Asserts that a value is an `Object`.
       * @example
       * expect({}).toEqual(
       *   expect.toBeObject()
       * );
       */
      toBeObject<T>(): JestMatchers<T>;
    }
  }
}

export const toBeObjectMatcher = (value: unknown): jest.CustomMatcherResult =>
  createResult({
    message: () => `expected ${printReceived(value)} to be an object`,
    notMessage: () => `expected ${printReceived(value)} not to be an object`,
    pass: isObject(value),
  });

expect.extend({ toBeObject: toBeObjectMatcher });
