import { isDivisibleBy } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a `Number` which results in a whole number when divided by ${otherNumber}.
       * @example
       * expect(12).toBeDivisibleBy(2);
       */
      toBeDivisibleBy(otherNumber: number): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a `Number` which results in a whole number when divided by ${otherNumber}.
       * @example
       * expect(12).toEqual(
       *   expect.toBeDivisibleBy(2)
       * );
       */
      toBeDivisibleBy<T>(otherNumber: number): JestMatchers<T>;
    }
  }
}

export const toBeDivisibleByMatcher = (value: any, otherNumber: number) =>
  createResult({
    message: () =>
      `expected ${printReceived(value)} to be divisible by ${printExpected(otherNumber)}`,
    notMessage: () =>
      `expected ${printReceived(value)} not to be divisible by ${printExpected(otherNumber)}`,
    pass: isDivisibleBy(otherNumber, value),
  });

expect.extend({ toBeDivisibleBy: toBeDivisibleByMatcher });
