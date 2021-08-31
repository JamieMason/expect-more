import { isDateOnDayOfMonth } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is an instance of `Date` occurring on the given day of the month, where the first day of the month is `1` and last is `31`.
       * @example
       * expect({ child: { grandchild: new Date('2021-08-29') } }).toHaveDateOnDayOfMonth('child.grandchild', 29);
       */
      toHaveDateOnDayOfMonth(propPath: string, dayOfMonth: number): boolean;
    }
  }
}

export const toHaveDateOnDayOfMonthMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string, dayOfMonth: number) {
      const pass = isDateOnDayOfMonth(dayOfMonth, getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(
            propPath,
          )}' not to be an instance of Date occurring on the ${printExpected(
            dayOfMonth,
          )} day of the month`
        : `expected value at '${printExpected(
            propPath,
          )}' to be an instance of Date occurring on the ${printExpected(
            dayOfMonth,
          )} day of the month`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveDateOnDayOfMonth: toHaveDateOnDayOfMonthMatcher,
  });
});
