import { isShorterThan } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is a `String` or `Array` whose length is less than that of the other provided.
       * @example
       * expect(['i have one item']).toBeShorterThan(['i', 'have', 4, 'items']);
       */
      toBeShorterThan(other: string | any[]): R;
    }
    interface Expect {
      /**
       * Asserts that a value is a `String` or `Array` whose length is less than that of the other provided.
       * @example
       * expect(['i have one item']).toEqual(
       *   expect.toBeShorterThan(['i', 'have', 4, 'items'])
       * );
       */
      toBeShorterThan<T>(other: string | any[]): JestMatchers<T>;
    }
  }
}

export const toBeShorterThanMatcher = (
  value: unknown,
  other: string | any[],
): jest.CustomMatcherResult =>
  createResult({
    message: () =>
      `expected ${printReceived(
        value,
      )} to be a string or array whose length is less than that of ${printExpected(other)}`,
    notMessage: () =>
      `expected ${printReceived(
        value,
      )} not to be a string or array whose length is less than that of ${printExpected(other)}`,
    pass: isShorterThan(other, value),
  });

expect.extend({ toBeShorterThan: toBeShorterThanMatcher });
