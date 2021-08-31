import { isDateInYear } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is an instance of `Date` occurring in the given year.
       * @example
       * expect({ child: { grandchild: new Date('2021-08-29') } }).toHaveDateInYear('child.grandchild', 2021);
       */
      toHaveDateInYear(propPath: string, year: number): boolean;
    }
  }
}

export const toHaveDateInYearMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string, year: number) {
      const pass = isDateInYear(year, getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(
            propPath,
          )}' not to be an instance of Date occurring in the year ${printExpected(year)}`
        : `expected value at '${printExpected(
            propPath,
          )}' to be an instance of Date occurring in the year ${printExpected(year)}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveDateInYear: toHaveDateInYearMatcher,
  });
});
