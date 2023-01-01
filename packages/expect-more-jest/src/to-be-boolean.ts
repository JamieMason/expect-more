/// <reference types="jest" />

import { expect } from '@jest/globals';
import { isBoolean } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare module 'expect' {
  interface Matchers<R> {
    /**
     * Asserts that a value is `true`, `false`, `new Boolean(true)`, or `new Boolean(false)`.
     * @example
     * expect(false).toBeBoolean();
     */
    toBeBoolean(): R;
  }
  interface AsymmetricMatchers {
    /**
     * Asserts that a value is `true`, `false`, `new Boolean(true)`, or `new Boolean(false)`.
     * @example
     * expect(false).toEqual(
     *   expect.toBeBoolean()
     * );
     */
    toBeBoolean(): void;
  }
}

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is `true`, `false`, `new Boolean(true)`, or `new Boolean(false)`.
       * @example
       * expect(false).toBeBoolean();
       */
      toBeBoolean(): R;
    }
    interface Expect {
      /**
       * Asserts that a value is `true`, `false`, `new Boolean(true)`, or `new Boolean(false)`.
       * @example
       * expect(false).toEqual(
       *   expect.toBeBoolean()
       * );
       */
      toBeBoolean<T>(): JestMatchers<T>;
    }
  }
}

export const toBeBooleanMatcher = (value: unknown) =>
  createResult({
    message: () => `expected ${printReceived(value)} to be true, false, or an instance of Boolean`,
    notMessage: () =>
      `expected ${printReceived(value)} not to be true, false, or an instance of Boolean`,
    pass: isBoolean(value),
  });

expect.extend({ toBeBoolean: toBeBooleanMatcher });
