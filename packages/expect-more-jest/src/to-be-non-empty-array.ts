/// <reference types="jest" />

import { expect } from '@jest/globals';
import { isNonEmptyArray } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare module 'expect' {
  interface Matchers<R> {
    /**
     * Asserts that a value is an `Array` containing at least one value.
     * @example
     * expect(['i', 'am not empty']).toBeNonEmptyArray();
     */
    toBeNonEmptyArray(): R;
  }
  interface AsymmetricMatchers {
    /**
     * Asserts that a value is an `Array` containing at least one value.
     * @example
     * expect(['i', 'am not empty']).toEqual(
     *   expect.toBeNonEmptyArray()
     * );
     */
    toBeNonEmptyArray(): void;
  }
}

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is an `Array` containing at least one value.
       * @example
       * expect(['i', 'am not empty']).toBeNonEmptyArray();
       */
      toBeNonEmptyArray(): R;
    }
    interface Expect {
      /**
       * Asserts that a value is an `Array` containing at least one value.
       * @example
       * expect(['i', 'am not empty']).toEqual(
       *   expect.toBeNonEmptyArray()
       * );
       */
      toBeNonEmptyArray<T>(): JestMatchers<T>;
    }
  }
}

export const toBeNonEmptyArrayMatcher = (value: unknown) =>
  createResult({
    message: () => `expected ${printReceived(value)} to be an array with at least one item`,
    notMessage: () => `expected ${printReceived(value)} not to be an array with at least one item`,
    pass: isNonEmptyArray(value),
  });

expect.extend({ toBeNonEmptyArray: toBeNonEmptyArrayMatcher });
