import { isShorterThan } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is a `String` or `Array` whose length is less than that of ${otherStringOrArray}.
       * @example
       * expect(['i have one item']).toBeShorterThan(['i', 'have', 4, 'items']);
       */
      toBeShorterThan(otherStringOrArray: string | any[]): boolean;
    }
  }
}

export const toBeShorterThanMatcher = () => {
  return {
    compare(value: any, otherStringOrArray: string | any[]) {
      const pass = isShorterThan(otherStringOrArray, value);
      const message = pass
        ? `expected ${printReceived(
            value,
          )} not to be a string or array whose length is less than that of ${printExpected(
            otherStringOrArray,
          )}`
        : `expected ${printReceived(
            value,
          )} to be a string or array whose length is less than that of ${printExpected(
            otherStringOrArray,
          )}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeShorterThan: toBeShorterThanMatcher,
  });
});
