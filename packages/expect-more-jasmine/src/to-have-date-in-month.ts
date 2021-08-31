import { isDateInMonth } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is an instance of `Date` occurring on the given month of the year, where January is `0` and December is `11`.
       * @example
       * expect({ child: { grandchild: new Date('2021-08-29') } }).toHaveDateInMonth('child.grandchild', 7);
       */
      toHaveDateInMonth(propPath: string, index: number): boolean;
    }
  }
}

export const toHaveDateInMonthMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string, index: number) {
      const pass = isDateInMonth(index, getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(
            propPath,
          )}' not to be an instance of Date occurring on the month of the year with index ${printExpected(
            index,
          )}`
        : `expected value at '${printExpected(
            propPath,
          )}' to be an instance of Date occurring on the month of the year with index ${printExpected(
            index,
          )}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveDateInMonth: toHaveDateInMonthMatcher,
  });
});
