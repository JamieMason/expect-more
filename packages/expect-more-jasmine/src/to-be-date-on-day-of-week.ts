import { isDateOnDayOfWeek } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is an instance of `Date` occurring on the day of the week with the given index, where Sunday is `0` and Saturday is `6`.
       * @example
       * expect(new Date('2021-08-29')).toBeDateOnDayOfWeek(0);
       */
      toBeDateOnDayOfWeek(index: number): boolean;
    }
  }
}

export const toBeDateOnDayOfWeekMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, index: number) {
      const pass = isDateOnDayOfWeek(index, value);
      const message = pass
        ? `expected ${printReceived(
            value,
          )} not to be an instance of Date occurring on the day of the week with index ${printExpected(
            index,
          )}`
        : `expected ${printReceived(
            value,
          )} to be an instance of Date occurring on the day of the week with index ${printExpected(
            index,
          )}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeDateOnDayOfWeek: toBeDateOnDayOfWeekMatcher,
  });
});
