/// <reference types="jest" />

import { isDateOnDayOfMonth } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is an instance of `Date` occurring on the given day of the month, where the first day of the month is `1` and last is `31`.
       * @example
       * expect(new Date('2021-08-29')).toBeDateOnDayOfMonth(29);
       */
      toBeDateOnDayOfMonth(dayOfMonth: number): R;
    }
    interface Expect {
      /**
       * Asserts that a value is an instance of `Date` occurring on the given day of the month, where the first day of the month is `1` and last is `31`.
       * @example
       * expect(new Date('2021-08-29')).toEqual(
       *   expect.toBeDateOnDayOfMonth(29)
       * );
       */
      toBeDateOnDayOfMonth<T>(dayOfMonth: number): JestMatchers<T>;
    }
  }
}

export const toBeDateOnDayOfMonthMatcher = (
  value: unknown,
  dayOfMonth: number,
): jest.CustomMatcherResult =>
  createResult({
    message: () =>
      `expected ${printReceived(value)} to be an instance of Date occurring on the ${printExpected(
        dayOfMonth,
      )} day of the month`,
    notMessage: () =>
      `expected ${printReceived(
        value,
      )} not to be an instance of Date occurring on the ${printExpected(
        dayOfMonth,
      )} day of the month`,
    pass: isDateOnDayOfMonth(dayOfMonth, value),
  });

expect.extend({ toBeDateOnDayOfMonth: toBeDateOnDayOfMonthMatcher });
