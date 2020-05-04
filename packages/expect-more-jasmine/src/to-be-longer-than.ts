import { isLongerThan } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is a `String` or `Array` whose length is greater than that of ${otherStringOrArray}.
       * @example
       * expect(['i', 'have', 3]).toBeLongerThan([2, 'items']);
       */
      toBeLongerThan(otherStringOrArray: string | any[]): boolean;
    }
  }
}

export const toBeLongerThanMatcher = () => {
  return {
    compare(value: any, otherStringOrArray: string | any[]) {
      const pass = isLongerThan(otherStringOrArray, value);
      const message = pass
        ? `expected ${printReceived(
            value,
          )} not to be a string or array whose length is greater than that of ${printExpected(
            otherStringOrArray,
          )}`
        : `expected ${printReceived(
            value,
          )} to be a string or array whose length is greater than that of ${printExpected(
            otherStringOrArray,
          )}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeLongerThan: toBeLongerThanMatcher,
  });
});
