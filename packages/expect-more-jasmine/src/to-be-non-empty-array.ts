import { isNonEmptyArray } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

export const toBeNonEmptyArrayMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown) {
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
