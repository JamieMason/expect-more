import { isAfter } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is a valid instance of `Date` whose value occurs after that of another.
       * @example
       * expect({ child: { grandchild: new Date('2020-01-01') } }).toHaveDateAfter('child.grandchild', new Date('2019-12-31'));
       */
      toHaveDateAfter(propPath: string, otherDate: Date): boolean;
    }
  }
}

export const toHaveDateAfterMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string, otherDate: Date) {
      const pass = isAfter(otherDate, getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(
            propPath,
          )}' not to be an instance of Date, occurring after ${printExpected(otherDate)}`
        : `expected value at '${printExpected(
            propPath,
          )}' to be an instance of Date, occurring after ${printExpected(otherDate)}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveDateAfter: toHaveDateAfterMatcher,
  });
});
