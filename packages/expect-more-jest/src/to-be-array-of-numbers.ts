/// <reference types="jest" />

import { expect } from '@jest/globals';
import { isArrayOfNumbers } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare module 'expect' {
  interface Matchers<R> {
    /**
     * Asserts that a value is an `Array` containing only `Number` values.
     * @example
     * expect([12, 0, 14]).toBeArrayOfNumbers();
     */
    toBeArrayOfNumbers(): R;
  }
  interface AsymmetricMatchers {
    /**
     * Asserts that a value is an `Array` containing only `Number` values.
     * @example
     * expect([12, 0, 14]).toEqual(
     *   expect.toBeArrayOfNumbers()
     * );
     */
    toBeArrayOfNumbers(): void;
  }
}

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is an `Array` containing only `Number` values.
       * @example
       * expect([12, 0, 14]).toBeArrayOfNumbers();
       */
      toBeArrayOfNumbers(): R;
    }
    interface Expect {
      /**
       * Asserts that a value is an `Array` containing only `Number` values.
       * @example
       * expect([12, 0, 14]).toEqual(
       *   expect.toBeArrayOfNumbers()
       * );
       */
      toBeArrayOfNumbers<T>(): JestMatchers<T>;
    }
  }
}

export const toBeArrayOfNumbersMatcher = (value: unknown) =>
  createResult({
    message: () =>
      `expected ${printReceived(value)} to be a non-empty array, containing only numbers`,
    notMessage: () =>
      `expected ${printReceived(value)} not to be a non-empty array, containing only numbers`,
    pass: isArrayOfNumbers(value),
  });

expect.extend({ toBeArrayOfNumbers: toBeArrayOfNumbersMatcher });
