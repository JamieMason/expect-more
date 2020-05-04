import { isArrayOfNumbers } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is an `Array` containing only `Number` values.
       * @example
       * expect([12, 0, 14]).toBeArrayOfNumbers();
       */
      toBeArrayOfNumbers(): boolean;
    }
  }
}

export const toBeArrayOfNumbersMatcher = () => {
  return {
    compare(value: any) {
      const pass = isArrayOfNumbers(value);
      const message = pass
        ? `expected ${printReceived(value)} not to be a non-empty array, containing only numbers`
        : `expected ${printReceived(value)} to be a non-empty array, containing only numbers`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeArrayOfNumbers: toBeArrayOfNumbersMatcher,
  });
});
