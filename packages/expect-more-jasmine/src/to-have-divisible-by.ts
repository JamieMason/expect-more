import { isDivisibleBy } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is a `Number` which results in a whole number when divided by ${otherNumber}.
       * @example
       * expect({ child: { grandchild: 12 } }).toHaveDivisibleBy('child.grandchild', 2);
       */
      toHaveDivisibleBy(propPath: string, otherNumber: number): boolean;
    }
  }
}

export const toHaveDivisibleByMatcher = () => {
  return {
    compare(value: any, propPath: string, otherNumber: number) {
      const pass = isDivisibleBy(otherNumber, getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(propPath)}' not to be divisible by ${printExpected(
            otherNumber,
          )}`
        : `expected value at '${printExpected(propPath)}' to be divisible by ${printExpected(
            otherNumber,
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
