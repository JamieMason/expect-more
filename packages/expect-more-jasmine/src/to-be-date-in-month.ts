/// <reference types="jasmine" />

import { isDateInMonth } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is an instance of `Date` occurring on the given month of the year, where January is `0` and December is `11`.
       * @example
       * expect(new Date('2021-08-29')).toBeDateInMonth(7);
       */
      toBeDateInMonth(index: number): boolean;
    }
  }
}

export const toBeDateInMonthMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, index: number) {
      const pass = isDateInMonth(index, value);
      const message = pass
        ? `expected ${printReceived(
            value,
          )} not to be an instance of Date occurring on the month of the year with index ${printExpected(
            index,
          )}`
        : `expected ${printReceived(
            value,
          )} to be an instance of Date occurring on the month of the year with index ${printExpected(
            index,
          )}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeDateInMonth: toBeDateInMonthMatcher,
  });
});
