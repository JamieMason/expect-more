/// <reference types="jest" />

import { expect } from '@jest/globals';
import { isArrayOfObjects } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare module 'expect' {
  interface Matchers<R> {
    /**
     * Asserts that a value is an `Array` containing only `Object` values.
     * @example
     * expect([{}, new Object()]).toBeArrayOfObjects();
     */
    toBeArrayOfObjects(): R;
  }
  interface AsymmetricMatchers {
    /**
     * Asserts that a value is an `Array` containing only `Object` values.
     * @example
     * expect([{}, new Object()]).toEqual(
     *   expect.toBeArrayOfObjects()
     * );
     */
    toBeArrayOfObjects(): void;
  }
}

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is an `Array` containing only `Object` values.
       * @example
       * expect([{}, new Object()]).toBeArrayOfObjects();
       */
      toBeArrayOfObjects(): R;
    }
    interface Expect {
      /**
       * Asserts that a value is an `Array` containing only `Object` values.
       * @example
       * expect([{}, new Object()]).toEqual(
       *   expect.toBeArrayOfObjects()
       * );
       */
      toBeArrayOfObjects<T>(): JestMatchers<T>;
    }
  }
}

export const toBeArrayOfObjectsMatcher = (value: unknown) =>
  createResult({
    message: () =>
      `expected ${printReceived(value)} to be a non-empty array, containing only objects`,
    notMessage: () =>
      `expected ${printReceived(value)} not to be a non-empty array, containing only objects`,
    pass: isArrayOfObjects(value),
  });

expect.extend({ toBeArrayOfObjects: toBeArrayOfObjectsMatcher });
