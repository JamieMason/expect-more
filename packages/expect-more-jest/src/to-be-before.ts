/// <reference types="jest" />

import { isBefore } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is a valid instance of `Date` whose value occurs before that of another.
       * @example
       * expect(new Date('2019-12-31')).toBeBefore(new Date('2020-01-01'));
       */
      toBeBefore(other: Date): R;
    }
    interface Expect {
      /**
       * Asserts that a value is a valid instance of `Date` whose value occurs before that of another.
       * @example
       * expect(new Date('2019-12-31')).toEqual(
       *   expect.toBeBefore(new Date('2020-01-01'))
       * );
       */
      toBeBefore<T>(other: Date): JestMatchers<T>;
    }
  }
}

export const toBeBeforeMatcher = (value: unknown, other: Date): jest.CustomMatcherResult =>
  createResult({
    message: () =>
      `expected ${printReceived(value)} to be an instance of Date, occurring before ${printExpected(
        other,
      )}`,
    notMessage: () =>
      `expected ${printReceived(
        value,
      )} not to be an instance of Date, occurring before ${printExpected(other)}`,
    pass: isBefore(other, value),
  });

expect.extend({ toBeBefore: toBeBeforeMatcher });
