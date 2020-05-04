import { isArray } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is a valid `Array` containing none or any number of items of any type.
       * @example
       * expect([2, true, 'string']).toBeArray();
       */
      toBeArray(): boolean;
    }
  }
}

export const toBeArrayMatcher = () => {
  return {
    compare(value: any) {
      const pass = isArray(value);
      const message = pass
        ? `expected ${printReceived(value)} not to be an array`
        : `expected ${printReceived(value)} to be an array`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeArray: toBeArrayMatcher,
  });
});
