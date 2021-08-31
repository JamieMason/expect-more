import { isDateOnDayOfWeek } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is an instance of `Date` occurring on the day of the week with the given index, where Sunday is `0` and Saturday is `6`.
       * @example
       * expect({ child: { grandchild: new Date('2021-08-29') } }).toHaveDateOnDayOfWeek('child.grandchild', 0);
       */
      toHaveDateOnDayOfWeek(propPath: string, index: number): boolean;
    }
  }
}

export const toHaveDateOnDayOfWeekMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string, index: number) {
      const pass = isDateOnDayOfWeek(index, getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(
            propPath,
          )}' not to be an instance of Date occurring on the day of the week with index ${printExpected(
            index,
          )}`
        : `expected value at '${printExpected(
            propPath,
          )}' to be an instance of Date occurring on the day of the week with index ${printExpected(
            index,
          )}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveDateOnDayOfWeek: toHaveDateOnDayOfWeekMatcher,
  });
});
