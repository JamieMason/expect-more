/// <reference types="jest" />

import { expect } from '@jest/globals';
import { isDateOnOrAfter } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare module 'expect' {
  interface Matchers<R> {
    /**
     * Asserts that a value is an instance of `Date` occurring on or after the exact date and time of another.
     * @example
     * expect(new Date('2019-12-31')).toBeDateOnOrAfter(new Date('2019-12-15'));
     */
    toBeDateOnOrAfter(other: unknown): R;
  }
  interface AsymmetricMatchers {
    /**
     * Asserts that a value is an instance of `Date` occurring on or after the exact date and time of another.
     * @example
     * expect(new Date('2019-12-31')).toEqual(
     *   expect.toBeDateOnOrAfter(new Date('2019-12-15'))
     * );
     */
    toBeDateOnOrAfter(other: unknown): void;
  }
}

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is an instance of `Date` occurring on or after the exact date and time of another.
       * @example
       * expect(new Date('2019-12-31')).toBeDateOnOrAfter(new Date('2019-12-15'));
       */
      toBeDateOnOrAfter(other: unknown): R;
    }
    interface Expect {
      /**
       * Asserts that a value is an instance of `Date` occurring on or after the exact date and time of another.
       * @example
       * expect(new Date('2019-12-31')).toEqual(
       *   expect.toBeDateOnOrAfter(new Date('2019-12-15'))
       * );
       */
      toBeDateOnOrAfter<T>(other: unknown): JestMatchers<T>;
    }
  }
}

export const toBeDateOnOrAfterMatcher = (value: unknown, other: unknown) =>
  createResult({
    message: () =>
      `expected ${printReceived(
        value,
      )} to be an instance of Date occurring on or after ${printExpected(other)}`,
    notMessage: () =>
      `expected ${printReceived(
        value,
      )} not to be an instance of Date occurring on or after ${printExpected(other)}`,
    pass: isDateOnOrAfter(other, value),
  });

expect.extend({ toBeDateOnOrAfter: toBeDateOnOrAfterMatcher });
