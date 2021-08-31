import { isArrayOfStrings } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is an `Array` containing only `String` values.
       * @example
       * expect({ child: { grandchild: ['we', 'are', 'all', 'strings'] } }).toHaveArrayOfStrings('child.grandchild');
       */
      toHaveArrayOfStrings(propPath: string): boolean;
    }
  }
}

export const toHaveArrayOfStringsMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string) {
      const pass = isArrayOfStrings(getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(
            propPath,
          )}' not to be a non-empty array, containing only strings`
        : `expected value at '${printExpected(
            propPath,
          )}' to be a non-empty array, containing only strings`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveArrayOfStrings: toHaveArrayOfStringsMatcher,
  });
});
