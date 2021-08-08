import { isArrayOfSize } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that ${value} is an `Array` containing ${size} number of values.
       * @example
       * expect({ child: { grandchild: ['i', 'contain', 4, 'items'] } }).toHaveArrayOfSize('child.grandchild', 4);
       */
      toHaveArrayOfSize(propPath: string, size: number): boolean;
    }
  }
}

export const toHaveArrayOfSizeMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string, size: number) {
      const pass = isArrayOfSize(size, getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(
            propPath,
          )}' not to be an array containing exactly ${printExpected(size)} items`
        : `expected value at '${printExpected(
            propPath,
          )}' to be an array containing exactly ${printExpected(size)} items`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveArrayOfSize: toHaveArrayOfSizeMatcher,
  });
});
