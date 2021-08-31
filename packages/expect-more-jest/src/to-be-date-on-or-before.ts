import { isDateOnOrBefore } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is an instance of `Date` occurring on or before the exact date and time of another.
       * @example
       * expect(new Date('2019-12-15')).toBeDateOnOrBefore(new Date('2019-12-31'));
       */
      toBeDateOnOrBefore(other: unknown): R;
    }
    interface Expect {
      /**
       * Asserts that a value is an instance of `Date` occurring on or before the exact date and time of another.
       * @example
       * expect(new Date('2019-12-15')).toEqual(
       *   expect.toBeDateOnOrBefore(new Date('2019-12-31'))
       * );
       */
      toBeDateOnOrBefore<T>(other: unknown): JestMatchers<T>;
    }
  }
}

export const toBeDateOnOrBeforeMatcher = (
  value: unknown,
  other: unknown,
): jest.CustomMatcherResult =>
  createResult({
    message: () =>
      `expected ${printReceived(
        value,
      )} to be an instance of Date occurring on or before ${printExpected(other)}`,
    notMessage: () =>
      `expected ${printReceived(
        value,
      )} not to be an instance of Date occurring on or before ${printExpected(other)}`,
    pass: isDateOnOrBefore(other, value),
  });

expect.extend({ toBeDateOnOrBefore: toBeDateOnOrBeforeMatcher });
