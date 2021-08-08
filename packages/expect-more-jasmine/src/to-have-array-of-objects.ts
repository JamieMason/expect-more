import { isArrayOfObjects } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that ${value} is an `Array` containing only `Object` values.
       * @example
       * expect({ child: { grandchild: [{}, new Object()] } }).toHaveArrayOfObjects('child.grandchild');
       */
      toHaveArrayOfObjects(propPath: string): boolean;
    }
  }
}

export const toHaveArrayOfObjectsMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string) {
      const pass = isArrayOfObjects(getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(
            propPath,
          )}' not to be a non-empty array, containing only objects`
        : `expected value at '${printExpected(
            propPath,
          )}' to be a non-empty array, containing only objects`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveArrayOfObjects: toHaveArrayOfObjectsMatcher,
  });
});
