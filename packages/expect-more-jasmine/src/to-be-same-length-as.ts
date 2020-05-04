import { isSameLengthAs } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is a `String` or `Array` whose length is the same as that of ${otherStringOrArray}.
       * @example
       * expect(['i also have', '2 items']).toBeSameLengthAs(['i have', '2 items']);
       */
      toBeSameLengthAs(otherStringOrArray: string | any[]): boolean;
    }
  }
}

export const toBeSameLengthAsMatcher = () => {
  return {
    compare(value: any, otherStringOrArray: string | any[]) {
      const pass = isSameLengthAs(otherStringOrArray, value);
      const message = pass
        ? `expected ${printReceived(
            value,
          )} not to be a string or array whose length is the same as that of ${printExpected(
            otherStringOrArray,
          )}`
        : `expected ${printReceived(
            value,
          )} to be a string or array whose length is the same as that of ${printExpected(
            otherStringOrArray,
          )}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeSameLengthAs: toBeSameLengthAsMatcher,
  });
});
