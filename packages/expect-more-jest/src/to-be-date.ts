/// <reference types="jest" />

import { expect } from '@jest/globals';
import { isDate } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare module 'expect' {
  interface Matchers<R> {
    /**
     * Asserts that a value is an instance of `Date`.
     * @example
     * expect(new Date('2019-12-31')).toBeDate();
     */
    toBeDate(): R;
  }
  interface AsymmetricMatchers {
    /**
     * Asserts that a value is an instance of `Date`.
     * @example
     * expect(new Date('2019-12-31')).toEqual(
     *   expect.toBeDate()
     * );
     */
    toBeDate(): void;
  }
}

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is an instance of `Date`.
       * @example
       * expect(new Date('2019-12-31')).toBeDate();
       */
      toBeDate(): R;
    }
    interface Expect {
      /**
       * Asserts that a value is an instance of `Date`.
       * @example
       * expect(new Date('2019-12-31')).toEqual(
       *   expect.toBeDate()
       * );
       */
      toBeDate<T>(): JestMatchers<T>;
    }
  }
}

export const toBeDateMatcher = (value: unknown) =>
  createResult({
    message: () => `expected ${printReceived(value)} to be an instance of Date`,
    notMessage: () => `expected ${printReceived(value)} not to be an instance of Date`,
    pass: isDate(value),
  });

expect.extend({ toBeDate: toBeDateMatcher });
