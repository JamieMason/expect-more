import { isLessThanOrEqualTo } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is less than or equal to another.
       * @example
       * expect({ child: { grandchild: 8 } }).toHaveLessThanOrEqualTo('child.grandchild', 12);
       */
      toHaveLessThanOrEqualTo(propPath: string, other: number): boolean;
    }
  }
}

export const toHaveLessThanOrEqualToMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string, other: number) {
      const pass = isLessThanOrEqualTo(other, getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(
            propPath,
          )}' not to be less than or equal to ${printExpected(other)}`
        : `expected value at '${printExpected(
            propPath,
          )}' to be less than or equal to ${printExpected(other)}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveLessThanOrEqualTo: toHaveLessThanOrEqualToMatcher,
  });
});
