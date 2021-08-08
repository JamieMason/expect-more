import { isShorterThan } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that ${value} is a `String` or `Array` whose length is less than that of ${otherStringOrArray}.
       * @example
       * expect({ child: { grandchild: ['i have one item'] } }).toHaveShorterThan('child.grandchild', ['i', 'have', 4, 'items']);
       */
      toHaveShorterThan(propPath: string, otherStringOrArray: string | any[]): boolean;
    }
  }
}

export const toHaveShorterThanMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string, otherStringOrArray: string | any[]) {
      const pass = isShorterThan(otherStringOrArray, getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(
            propPath,
          )}' not to be a string or array whose length is less than that of ${printExpected(
            otherStringOrArray,
          )}`
        : `expected value at '${printExpected(
            propPath,
          )}' to be a string or array whose length is less than that of ${printExpected(
            otherStringOrArray,
          )}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveShorterThan: toHaveShorterThanMatcher,
  });
});
