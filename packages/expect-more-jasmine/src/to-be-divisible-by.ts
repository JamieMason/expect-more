import { isDivisibleBy } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

export const toBeDivisibleByMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, otherNumber: number) {
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
