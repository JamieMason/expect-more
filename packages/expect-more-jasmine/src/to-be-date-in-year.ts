import { isDateInYear } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is an instance of `Date` occurring in the given year.
       * @example
       * expect(new Date('2021-08-29')).toBeDateInYear(2021);
       */
      toBeDateInYear(year: number): boolean;
    }
  }
}

export const toBeDateInYearMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, year: number) {
      const pass = isDateInYear(year, value);
      const message = pass
        ? `expected ${printReceived(
            value,
          )} not to be an instance of Date occurring in the year ${printExpected(year)}`
        : `expected ${printReceived(
            value,
          )} to be an instance of Date occurring in the year ${printExpected(year)}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeDateInYear: toBeDateInYearMatcher,
  });
});
