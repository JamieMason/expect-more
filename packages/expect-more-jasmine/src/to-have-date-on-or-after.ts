import { isDateOnOrAfter } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is an instance of `Date` occurring on or after the exact date and time of another.
       * @example
       * expect({ child: { grandchild: new Date('2019-12-31') } }).toHaveDateOnOrAfter('child.grandchild', new Date('2019-12-15'));
       */
      toHaveDateOnOrAfter(propPath: string, other: unknown): boolean;
    }
  }
}

export const toHaveDateOnOrAfterMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string, other: unknown) {
      const pass = isDateOnOrAfter(other, getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(
            propPath,
          )}' not to be an instance of Date occurring on or after ${printExpected(other)}`
        : `expected value at '${printExpected(
            propPath,
          )}' to be an instance of Date occurring on or after ${printExpected(other)}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveDateOnOrAfter: toHaveDateOnOrAfterMatcher,
  });
});
