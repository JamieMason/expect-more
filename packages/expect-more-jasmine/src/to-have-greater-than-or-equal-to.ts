import { isGreaterThanOrEqualTo } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that ${value} is greater than or equal to ${otherNumber}.
       * @example
       * expect({ child: { grandchild: 10 } }).toHaveGreaterThanOrEqualTo('child.grandchild', 5);
       */
      toHaveGreaterThanOrEqualTo(propPath: string, otherNumber: number): boolean;
    }
  }
}

export const toHaveGreaterThanOrEqualToMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string, otherNumber: number) {
      const pass = isGreaterThanOrEqualTo(otherNumber, getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(
            propPath,
          )}' not to be greater than or equal to ${printExpected(otherNumber)}`
        : `expected value at '${printExpected(
            propPath,
          )}' to be greater than or equal to ${printExpected(otherNumber)}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveGreaterThanOrEqualTo: toHaveGreaterThanOrEqualToMatcher,
  });
});
