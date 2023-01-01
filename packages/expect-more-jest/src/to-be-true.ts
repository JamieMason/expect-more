/// <reference types="jest" />

import { expect } from '@jest/globals';
import { isTrue } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare module 'expect' {
  interface Matchers<R> {
    /**
     * Asserts that a value is `true` or `new Boolean(true)`.
     * @example
     * expect(true).toBeTrue();
     */
    toBeTrue(): R;
  }
  interface AsymmetricMatchers {
    /**
     * Asserts that a value is `true` or `new Boolean(true)`.
     * @example
     * expect(true).toEqual(
     *   expect.toBeTrue()
     * );
     */
    toBeTrue(): void;
  }
}

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is `true` or `new Boolean(true)`.
       * @example
       * expect(true).toBeTrue();
       */
      toBeTrue(): R;
    }
    interface Expect {
      /**
       * Asserts that a value is `true` or `new Boolean(true)`.
       * @example
       * expect(true).toEqual(
       *   expect.toBeTrue()
       * );
       */
      toBeTrue<T>(): JestMatchers<T>;
    }
  }
}

export const toBeTrueMatcher = (value: unknown) =>
  createResult({
    message: () => `expected ${printReceived(value)} to be true or Boolean(true)`,
    notMessage: () => `expected ${printReceived(value)} not to be true or Boolean(true)`,
    pass: isTrue(value),
  });

expect.extend({ toBeTrue: toBeTrueMatcher });
