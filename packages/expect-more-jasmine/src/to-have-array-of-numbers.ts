import { isArrayOfNumbers } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is an `Array` containing only `Number` values.
       * @example
       * expect({ child: { grandchild: [12, 0, 14] } }).toHaveArrayOfNumbers('child.grandchild');
       */
      toHaveArrayOfNumbers(propPath: string): boolean;
    }
  }
}

export const toHaveArrayOfNumbersMatcher = () => {
  return {
    compare(value: any, propPath: string) {
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
