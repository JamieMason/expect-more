import { isDivisibleBy } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is a `Number` which results in a whole number when divided by another.
       * @example
       * expect({ child: { grandchild: 12 } }).toHaveDivisibleBy('child.grandchild', 2);
       */
      toHaveDivisibleBy(propPath: string, other: number): boolean;
    }
  }
}

export const toHaveDivisibleByMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string, other: number) {
      const pass = isDivisibleBy(other, getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(propPath)}' not to be divisible by ${printExpected(
            other,
          )}`
        : `expected value at '${printExpected(propPath)}' to be divisible by ${printExpected(
            other,
          )}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveDivisibleBy: toHaveDivisibleByMatcher,
  });
});
