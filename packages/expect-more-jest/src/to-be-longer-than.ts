/// <reference types="jest" />

import { isLongerThan } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is a `String` or `Array` whose length is greater than that of another.
       * @example
       * expect(['i', 'have', 3]).toBeLongerThan([2, 'items']);
       */
      toBeLongerThan(other: string | any[]): R;
    }
    interface Expect {
      /**
       * Asserts that a value is a `String` or `Array` whose length is greater than that of another.
       * @example
       * expect(['i', 'have', 3]).toEqual(
       *   expect.toBeLongerThan([2, 'items'])
       * );
       */
      toBeLongerThan<T>(other: string | any[]): JestMatchers<T>;
    }
  }
}

export const toBeLongerThanMatcher = (
  value: unknown,
  other: string | any[],
): jest.CustomMatcherResult =>
  createResult({
    message: () =>
      `expected ${printReceived(
        value,
      )} to be a string or array whose length is greater than that of ${printExpected(other)}`,
    notMessage: () =>
      `expected ${printReceived(
        value,
      )} not to be a string or array whose length is greater than that of ${printExpected(other)}`,
    pass: isLongerThan(other, value),
  });

expect.extend({ toBeLongerThan: toBeLongerThanMatcher });
