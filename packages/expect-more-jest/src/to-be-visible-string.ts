/// <reference types="jest" />

import { expect } from '@jest/globals';
import { isVisibleString } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare module 'expect' {
  interface Matchers<R> {
    /**
     * Asserts that a value is a valid `String` containing at least one character which is not whitespace.
     * @example
     * expect('i am visible').toBeVisibleString();
     */
    toBeVisibleString(): R;
  }
  interface AsymmetricMatchers {
    /**
     * Asserts that a value is a valid `String` containing at least one character which is not whitespace.
     * @example
     * expect('i am visible').toEqual(
     *   expect.toBeVisibleString()
     * );
     */
    toBeVisibleString(): void;
  }
}

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is a valid `String` containing at least one character which is not whitespace.
       * @example
       * expect('i am visible').toBeVisibleString();
       */
      toBeVisibleString(): R;
    }
    interface Expect {
      /**
       * Asserts that a value is a valid `String` containing at least one character which is not whitespace.
       * @example
       * expect('i am visible').toEqual(
       *   expect.toBeVisibleString()
       * );
       */
      toBeVisibleString<T>(): JestMatchers<T>;
    }
  }
}

export const toBeVisibleStringMatcher = (value: unknown) =>
  createResult({
    message: () =>
      `expected ${printReceived(value)} to be a string with at least one non-whitespace character`,
    notMessage: () =>
      `expected ${printReceived(
        value,
      )} not to be a string with at least one non-whitespace character`,
    pass: isVisibleString(value),
  });

expect.extend({ toBeVisibleString: toBeVisibleStringMatcher });
