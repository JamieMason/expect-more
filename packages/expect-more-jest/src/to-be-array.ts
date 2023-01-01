/// <reference types="jest" />

import { expect } from '@jest/globals';
import { isArray } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare module 'expect' {
  interface Matchers<R> {
    /**
     * Asserts that a value is a valid `Array` containing none or any number of items of any type.
     * @example
     * expect([2, true, 'string']).toBeArray();
     */
    toBeArray(): R;
  }
  interface AsymmetricMatchers {
    /**
     * Asserts that a value is a valid `Array` containing none or any number of items of any type.
     * @example
     * expect([2, true, 'string']).toEqual(
     *   expect.toBeArray()
     * );
     */
    toBeArray(): void;
  }
}

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is a valid `Array` containing none or any number of items of any type.
       * @example
       * expect([2, true, 'string']).toBeArray();
       */
      toBeArray(): R;
    }
    interface Expect {
      /**
       * Asserts that a value is a valid `Array` containing none or any number of items of any type.
       * @example
       * expect([2, true, 'string']).toEqual(
       *   expect.toBeArray()
       * );
       */
      toBeArray<T>(): JestMatchers<T>;
    }
  }
}

export const toBeArrayMatcher = (value: unknown) =>
  createResult({
    message: () => `expected ${printReceived(value)} to be an array`,
    notMessage: () => `expected ${printReceived(value)} not to be an array`,
    pass: isArray(value),
  });

expect.extend({ toBeArray: toBeArrayMatcher });
