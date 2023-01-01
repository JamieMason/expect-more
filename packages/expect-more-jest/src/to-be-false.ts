/// <reference types="jest" />

import { expect } from '@jest/globals';
import { isFalse } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare module 'expect' {
  interface Matchers<R> {
    /**
     * Asserts that a value is `false` or `new Boolean(false)`.
     * @example
     * expect(false).toBeFalse();
     */
    toBeFalse(): R;
  }
  interface AsymmetricMatchers {
    /**
     * Asserts that a value is `false` or `new Boolean(false)`.
     * @example
     * expect(false).toEqual(
     *   expect.toBeFalse()
     * );
     */
    toBeFalse(): void;
  }
}

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is `false` or `new Boolean(false)`.
       * @example
       * expect(false).toBeFalse();
       */
      toBeFalse(): R;
    }
    interface Expect {
      /**
       * Asserts that a value is `false` or `new Boolean(false)`.
       * @example
       * expect(false).toEqual(
       *   expect.toBeFalse()
       * );
       */
      toBeFalse<T>(): JestMatchers<T>;
    }
  }
}

export const toBeFalseMatcher = (value: unknown) =>
  createResult({
    message: () => `expected ${printReceived(value)} to be false or Boolean(false)`,
    notMessage: () => `expected ${printReceived(value)} not to be false or Boolean(false)`,
    pass: isFalse(value),
  });

expect.extend({ toBeFalse: toBeFalseMatcher });
