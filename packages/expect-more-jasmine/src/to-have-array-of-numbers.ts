import { isArrayOfNumbers } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is an `Array` containing only `Number` values.
       * @example
       * expect({ child: { grandchild: [12, 0, 14] } }).toHaveArrayOfNumbers('child.grandchild');
       */
      toHaveArrayOfNumbers(propPath: string): boolean;
    }
  }
}

export const toHaveArrayOfNumbersMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string) {
      const pass = isArrayOfNumbers(getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(
            propPath,
          )}' not to be a non-empty array, containing only numbers`
        : `expected value at '${printExpected(
            propPath,
          )}' to be a non-empty array, containing only numbers`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveArrayOfNumbers: toHaveArrayOfNumbersMatcher,
  });
});
