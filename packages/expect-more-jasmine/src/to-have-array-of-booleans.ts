import { isArrayOfBooleans } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is an `Array` containing only `Boolean` values.
       * @example
       * expect({ child: { grandchild: [true, false, new Boolean(true)] } }).toHaveArrayOfBooleans('child.grandchild');
       */
      toHaveArrayOfBooleans(propPath: string): boolean;
    }
  }
}

export const toHaveArrayOfBooleansMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string) {
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
