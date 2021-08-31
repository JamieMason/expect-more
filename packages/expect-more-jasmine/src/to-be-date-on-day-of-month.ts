import { isDateOnDayOfMonth } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is an instance of `Date` occurring on the given day of the month, where the first day of the month is `1` and last is `31`.
       * @example
       * expect(new Date('2021-08-29')).toBeDateOnDayOfMonth(29);
       */
      toBeDateOnDayOfMonth(dayOfMonth: number): boolean;
    }
  }
}

export const toBeDateOnDayOfMonthMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, dayOfMonth: number) {
      const pass = isDateOnDayOfMonth(dayOfMonth, value);
      const message = pass
        ? `expected ${printReceived(
            value,
          )} not to be an instance of Date occurring on the ${printExpected(
            dayOfMonth,
          )} day of the month`
        : `expected ${printReceived(
            value,
          )} to be an instance of Date occurring on the ${printExpected(
            dayOfMonth,
          )} day of the month`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeDateOnDayOfMonth: toBeDateOnDayOfMonthMatcher,
  });
});
