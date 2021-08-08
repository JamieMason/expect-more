import { isEmptyArray } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that ${value} is a valid `Array` containing no items.
       * @example
       * expect([]).toBeEmptyArray();
       */
      toBeEmptyArray(): boolean;
    }
  }
}

export const toBeEmptyArrayMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown) {
      const pass = isEmptyArray(value);
      const message = pass
        ? `expected ${printReceived(value)} not to be an array containing no items`
        : `expected ${printReceived(value)} to be an array containing no items`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeEmptyArray: toBeEmptyArrayMatcher,
  });
});
