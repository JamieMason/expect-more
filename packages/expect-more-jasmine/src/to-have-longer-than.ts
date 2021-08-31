import { isLongerThan } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is a `String` or `Array` whose length is greater than that of another.
       * @example
       * expect({ child: { grandchild: ['i', 'have', 3] } }).toHaveLongerThan('child.grandchild', [2, 'items']);
       */
      toHaveLongerThan(propPath: string, other: string | any[]): boolean;
    }
  }
}

export const toHaveLongerThanMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string, other: string | any[]) {
      const pass = isLongerThan(other, getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(
            propPath,
          )}' not to be a string or array whose length is greater than that of ${printExpected(
            other,
          )}`
        : `expected value at '${printExpected(
            propPath,
          )}' to be a string or array whose length is greater than that of ${printExpected(other)}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveLongerThan: toHaveLongerThanMatcher,
  });
});
