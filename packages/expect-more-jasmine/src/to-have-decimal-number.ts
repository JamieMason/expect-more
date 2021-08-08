import { isDecimalNumber } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that ${value} is a `Number` with positive decimal places.
       * @example
       * expect({ child: { grandchild: 12.55 } }).toHaveDecimalNumber('child.grandchild');
       */
      toHaveDecimalNumber(propPath: string): boolean;
    }
  }
}

export const toHaveDecimalNumberMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string) {
      const pass = isDecimalNumber(getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(
            propPath,
          )}' not to be a number with positive decimal places`
        : `expected value at '${printExpected(
            propPath,
          )}' to be a number with positive decimal places`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveDecimalNumber: toHaveDecimalNumberMatcher,
  });
});
