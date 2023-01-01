/// <reference types="jest" />

import { isDateInMonth } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is an instance of `Date` occurring on the given month of the year, where January is `0` and December is `11`.
       * @example
       * expect(new Date('2021-08-29')).toBeDateInMonth(7);
       */
      toBeDateInMonth(index: number): R;
    }
    interface Expect {
      /**
       * Asserts that a value is an instance of `Date` occurring on the given month of the year, where January is `0` and December is `11`.
       * @example
       * expect(new Date('2021-08-29')).toEqual(
       *   expect.toBeDateInMonth(7)
       * );
       */
      toBeDateInMonth<T>(index: number): JestMatchers<T>;
    }
  }
}

export const toBeDateInMonthMatcher = (value: unknown, index: number): jest.CustomMatcherResult =>
  createResult({
    message: () =>
      `expected ${printReceived(
        value,
      )} to be an instance of Date occurring on the month of the year with index ${printExpected(
        index,
      )}`,
    notMessage: () =>
      `expected ${printReceived(
        value,
      )} not to be an instance of Date occurring on the month of the year with index ${printExpected(
        index,
      )}`,
    pass: isDateInMonth(index, value),
  });

expect.extend({ toBeDateInMonth: toBeDateInMonthMatcher });
