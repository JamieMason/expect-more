import { isNonEmptyArray } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is an `Array` containing at least one value.
       * @example
       * expect({ child: { grandchild: ['i', 'am not empty'] } }).toHaveNonEmptyArray('child.grandchild');
       */
      toHaveNonEmptyArray(propPath: string): boolean;
    }
  }
}

export const toHaveNonEmptyArrayMatcher = () => {
  return {
    compare(value: any, propPath: string) {
      const pass = isNonEmptyArray(getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(propPath)}' not to be an array with at least one item`
        : `expected value at '${printExpected(propPath)}' to be an array with at least one item`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveNonEmptyArray: toHaveNonEmptyArrayMatcher,
  });
});
