import { isArrayOfSize } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is an `Array` containing ${size} number of values.
       * @example
       * expect(['i', 'contain', 4, 'items']).toBeArrayOfSize(4);
       */
      toBeArrayOfSize(size: number): boolean;
    }
  }
}

export const toBeArrayOfSizeMatcher = () => {
  return {
    compare(value: any, size: number) {
      const pass = isArrayOfSize(size, value);
      const message = pass
        ? `expected ${printReceived(value)} not to be an array containing exactly ${printExpected(
            size,
          )} items`
        : `expected ${printReceived(value)} to be an array containing exactly ${printExpected(
            size,
          )} items`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeArrayOfSize: toBeArrayOfSizeMatcher,
  });
});
