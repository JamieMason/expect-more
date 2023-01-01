/// <reference types="jest" />

import { expect } from '@jest/globals';
import { isDivisibleBy } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare module 'expect' {
  interface Matchers<R> {
    /**
     * Asserts that a value is a `Number` which results in a whole number when divided by another.
     * @example
     * expect(12).toBeDivisibleBy(2);
     */
    toBeDivisibleBy(other: number): R;
  }
  interface AsymmetricMatchers {
    /**
     * Asserts that a value is a `Number` which results in a whole number when divided by another.
     * @example
     * expect(12).toEqual(
     *   expect.toBeDivisibleBy(2)
     * );
     */
    toBeDivisibleBy(other: number): void;
  }
}

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is a `Number` which results in a whole number when divided by another.
       * @example
       * expect(12).toBeDivisibleBy(2);
       */
      toBeDivisibleBy(other: number): R;
    }
    interface Expect {
      /**
       * Asserts that a value is a `Number` which results in a whole number when divided by another.
       * @example
       * expect(12).toEqual(
       *   expect.toBeDivisibleBy(2)
       * );
       */
      toBeDivisibleBy<T>(other: number): JestMatchers<T>;
    }
  }
}

export const toBeDivisibleByMatcher = (value: unknown, other: number) =>
  createResult({
    message: () => `expected ${printReceived(value)} to be divisible by ${printExpected(other)}`,
    notMessage: () =>
      `expected ${printReceived(value)} not to be divisible by ${printExpected(other)}`,
    pass: isDivisibleBy(other, value),
  });

expect.extend({ toBeDivisibleBy: toBeDivisibleByMatcher });
