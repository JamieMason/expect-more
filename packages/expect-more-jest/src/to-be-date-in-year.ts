/// <reference types="jest" />

import { expect } from '@jest/globals';
import { isDateInYear } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare module 'expect' {
  interface Matchers<R> {
    /**
     * Asserts that a value is an instance of `Date` occurring in the given year.
     * @example
     * expect(new Date('2021-08-29')).toBeDateInYear(2021);
     */
    toBeDateInYear(year: number): R;
  }
  interface AsymmetricMatchers {
    /**
     * Asserts that a value is an instance of `Date` occurring in the given year.
     * @example
     * expect(new Date('2021-08-29')).toEqual(
     *   expect.toBeDateInYear(2021)
     * );
     */
    toBeDateInYear(year: number): void;
  }
}

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is an instance of `Date` occurring in the given year.
       * @example
       * expect(new Date('2021-08-29')).toBeDateInYear(2021);
       */
      toBeDateInYear(year: number): R;
    }
    interface Expect {
      /**
       * Asserts that a value is an instance of `Date` occurring in the given year.
       * @example
       * expect(new Date('2021-08-29')).toEqual(
       *   expect.toBeDateInYear(2021)
       * );
       */
      toBeDateInYear<T>(year: number): JestMatchers<T>;
    }
  }
}

export const toBeDateInYearMatcher = (value: unknown, year: number) =>
  createResult({
    message: () =>
      `expected ${printReceived(
        value,
      )} to be an instance of Date occurring in the year ${printExpected(year)}`,
    notMessage: () =>
      `expected ${printReceived(
        value,
      )} not to be an instance of Date occurring in the year ${printExpected(year)}`,
    pass: isDateInYear(year, value),
  });

expect.extend({ toBeDateInYear: toBeDateInYearMatcher });
