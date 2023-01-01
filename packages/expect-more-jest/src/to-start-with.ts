/// <reference types="jest" />

import { expect } from '@jest/globals';
import { startsWith } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare module 'expect' {
  interface Matchers<R> {
    /**
     * Asserts that value is a string whose trailing characters are equal to those of the provided string.
     * @example
     * expect('JavaScript').toStartWith('Java');
     */
    toStartWith(otherString: string): R;
  }
  interface AsymmetricMatchers {
    /**
     * Asserts that value is a string whose trailing characters are equal to those of the provided string.
     * @example
     * expect('JavaScript').toEqual(
     *   expect.toStartWith('Java')
     * );
     */
    toStartWith(otherString: string): void;
  }
}

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that value is a string whose trailing characters are equal to those of the provided string.
       * @example
       * expect('JavaScript').toStartWith('Java');
       */
      toStartWith(otherString: string): R;
    }
    interface Expect {
      /**
       * Asserts that value is a string whose trailing characters are equal to those of the provided string.
       * @example
       * expect('JavaScript').toEqual(
       *   expect.toStartWith('Java')
       * );
       */
      toStartWith<T>(otherString: string): JestMatchers<T>;
    }
  }
}

export const toStartWithMatcher = (value: unknown, otherString: string) =>
  createResult({
    message: () => `expected ${printReceived(value)} to start with ${printExpected(otherString)}`,
    notMessage: () =>
      `expected ${printReceived(value)} not to start with ${printExpected(otherString)}`,
    pass: startsWith(otherString, value),
  });

expect.extend({ toStartWith: toStartWithMatcher });
