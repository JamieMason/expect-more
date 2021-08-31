import { isGreaterThanOrEqualTo } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is greater than or equal to ${other}.
       * @example
       * expect({ child: { grandchild: 10 } }).toHaveGreaterThanOrEqualTo('child.grandchild', 5);
       */
      toHaveGreaterThanOrEqualTo(propPath: string, other: number): boolean;
    }
  }
}

export const toHaveGreaterThanOrEqualToMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string, other: number) {
      const pass = isGreaterThanOrEqualTo(other, getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(
            propPath,
          )}' not to be greater than or equal to ${printExpected(other)}`
        : `expected value at '${printExpected(
            propPath,
          )}' to be greater than or equal to ${printExpected(other)}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveGreaterThanOrEqualTo: toHaveGreaterThanOrEqualToMatcher,
  });
});
