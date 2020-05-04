import { isNonEmptyArray } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is an `Array` containing at least one value.
       * @example
       * expect(['i', 'am not empty']).toBeNonEmptyArray();
       */
      toBeNonEmptyArray(): boolean;
    }
  }
}

export const toBeNonEmptyArrayMatcher = () => {
  return {
    compare(value: any) {
      const pass = isNonEmptyArray(value);
      const message = pass
        ? `expected ${printReceived(value)} not to be an array with at least one item`
        : `expected ${printReceived(value)} to be an array with at least one item`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeNonEmptyArray: toBeNonEmptyArrayMatcher,
  });
});
