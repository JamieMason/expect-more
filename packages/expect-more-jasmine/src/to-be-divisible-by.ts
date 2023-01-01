/// <reference types="jasmine" />

import { isDivisibleBy } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is a `Number` which results in a whole number when divided by another.
       * @example
       * expect(12).toBeDivisibleBy(2);
       */
      toBeDivisibleBy(other: number): boolean;
    }
  }
}

export const toBeDivisibleByMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, other: number) {
      const pass = isDivisibleBy(other, value);
      const message = pass
        ? `expected ${printReceived(value)} not to be divisible by ${printExpected(other)}`
        : `expected ${printReceived(value)} to be divisible by ${printExpected(other)}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeDivisibleBy: toBeDivisibleByMatcher,
  });
});
