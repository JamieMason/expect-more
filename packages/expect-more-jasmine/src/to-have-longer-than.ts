import { isLongerThan } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is a `String` or `Array` whose length is greater than that of ${otherStringOrArray}.
       * @example
       * expect({ child: { grandchild: ['i', 'have', 3] } }).toHaveLongerThan('child.grandchild', [2, 'items']);
       */
      toHaveLongerThan(propPath: string, otherStringOrArray: string | any[]): boolean;
    }
  }
}

export const toHaveLongerThanMatcher = () => {
  return {
    compare(value: any, propPath: string, otherStringOrArray: string | any[]) {
      const pass = isLongerThan(otherStringOrArray, getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(
            propPath,
          )}' not to be a string or array whose length is greater than that of ${printExpected(
            otherStringOrArray,
          )}`
        : `expected value at '${printExpected(
            propPath,
          )}' to be a string or array whose length is greater than that of ${printExpected(
            otherStringOrArray,
          )}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveLongerThan: toHaveLongerThanMatcher,
  });
});
