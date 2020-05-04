import { isLessThanOrEqualTo } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is less than or equal to ${otherNumber}.
       * @example
       * expect({ child: { grandchild: 8 } }).toHaveLessThanOrEqualTo('child.grandchild', 12);
       */
      toHaveLessThanOrEqualTo(propPath: string, otherNumber: number): boolean;
    }
  }
}

export const toHaveLessThanOrEqualToMatcher = () => {
  return {
    compare(value: any, propPath: string, otherNumber: number) {
      const pass = isLessThanOrEqualTo(otherNumber, getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(
            propPath,
          )}' not to be less than or equal to ${printExpected(otherNumber)}`
        : `expected value at '${printExpected(
            propPath,
          )}' to be less than or equal to ${printExpected(otherNumber)}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveLessThanOrEqualTo: toHaveLessThanOrEqualToMatcher,
  });
});
