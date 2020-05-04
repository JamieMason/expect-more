import { isDivisibleBy } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is a `Number` which results in a whole number when divided by ${otherNumber}.
       * @example
       * expect(12).toBeDivisibleBy(2);
       */
      toBeDivisibleBy(otherNumber: number): boolean;
    }
  }
}

export const toBeDivisibleByMatcher = () => {
  return {
    compare(value: any, otherNumber: number) {
      const pass = isDivisibleBy(otherNumber, value);
      const message = pass
        ? `expected ${printReceived(value)} not to be divisible by ${printExpected(otherNumber)}`
        : `expected ${printReceived(value)} to be divisible by ${printExpected(otherNumber)}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeDivisibleBy: toBeDivisibleByMatcher,
  });
});
