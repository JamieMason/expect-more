/// <reference types="jest" />

import { isAfter } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is a valid instance of `Date` whose value occurs after that of another.
       * @example
       * expect(new Date('2020-01-01')).toBeAfter(new Date('2019-12-31'));
       */
      toBeAfter(otherDate: Date): R;
    }
    interface Expect {
      /**
       * Asserts that a value is a valid instance of `Date` whose value occurs after that of another.
       * @example
       * expect(new Date('2020-01-01')).toEqual(
       *   expect.toBeAfter(new Date('2019-12-31'))
       * );
       */
      toBeAfter<T>(otherDate: Date): JestMatchers<T>;
    }
  }
}

export const toBeAfterMatcher = (value: unknown, otherDate: Date): jest.CustomMatcherResult =>
  createResult({
    message: () =>
      `expected ${printReceived(value)} to be an instance of Date, occurring after ${printExpected(
        otherDate,
      )}`,
    notMessage: () =>
      `expected ${printReceived(
        value,
      )} not to be an instance of Date, occurring after ${printExpected(otherDate)}`,
    pass: isAfter(otherDate, value),
  });

expect.extend({ toBeAfter: toBeAfterMatcher });
