import { isArrayOfBooleans } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is an `Array` containing only `Boolean` values.
       * @example
       * expect({ child: { grandchild: [true, false, new Boolean(true)] } }).toHaveArrayOfBooleans('child.grandchild');
       */
      toHaveArrayOfBooleans(propPath: string): boolean;
    }
  }
}

export const toHaveArrayOfBooleansMatcher = () => {
  return {
    compare(value: any, propPath: string) {
      const pass = isArrayOfBooleans(getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(
            propPath,
          )}' not to be a non-empty array, containing only boolean values`
        : `expected value at '${printExpected(
            propPath,
          )}' to be a non-empty array, containing only boolean values`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveArrayOfBooleans: toHaveArrayOfBooleansMatcher,
  });
});
