import { isEmptyArray } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is a valid `Array` containing no items.
       * @example
       * expect({ child: { grandchild: [] } }).toHaveEmptyArray('child.grandchild');
       */
      toHaveEmptyArray(propPath: string): boolean;
    }
  }
}

export const toHaveEmptyArrayMatcher = () => {
  return {
    compare(value: any, propPath: string) {
      const pass = isEmptyArray(getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(propPath)}' not to be an array containing no items`
        : `expected value at '${printExpected(propPath)}' to be an array containing no items`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveEmptyArray: toHaveEmptyArrayMatcher,
  });
});
