import { isNonEmptyArray } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is an `Array` containing at least one value.
       * @example
       * expect({ child: { grandchild: ['i', 'am not empty'] } }).toHaveNonEmptyArray('child.grandchild');
       */
      toHaveNonEmptyArray(propPath: string): boolean;
    }
  }
}

export const toHaveNonEmptyArrayMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string) {
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
