/// <reference types="jest" />

import { expect } from '@jest/globals';
import { endsWith } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare module 'expect' {
  interface Matchers<R> {
    /**
     * Asserts that value is a string whose trailing characters are equal to those of the provided string.
     * @example
     * expect('JavaScript').toEndWith('Script');
     */
    toEndWith(otherString: unknown): R;
  }
  interface AsymmetricMatchers {
    /**
     * Asserts that value is a string whose trailing characters are equal to those of the provided string.
     * @example
     * expect('JavaScript').toEqual(
     *   expect.toEndWith('Script')
     * );
     */
    toEndWith(otherString: unknown): void;
  }
}

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that value is a string whose trailing characters are equal to those of the provided string.
       * @example
       * expect('JavaScript').toEndWith('Script');
       */
      toEndWith(otherString: unknown): R;
    }
    interface Expect {
      /**
       * Asserts that value is a string whose trailing characters are equal to those of the provided string.
       * @example
       * expect('JavaScript').toEqual(
       *   expect.toEndWith('Script')
       * );
       */
      toEndWith<T>(otherString: unknown): JestMatchers<T>;
    }
  }
}

export const toEndWithMatcher = (value: unknown, otherString: unknown) =>
  createResult({
    message: () => `expected ${printReceived(value)} to end with ${printExpected(otherString)}`,
    notMessage: () =>
      `expected ${printReceived(value)} not to end with ${printExpected(otherString)}`,
    pass: endsWith(otherString, value),
  });

expect.extend({ toEndWith: toEndWithMatcher });
