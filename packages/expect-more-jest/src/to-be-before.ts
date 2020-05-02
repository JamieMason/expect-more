import { isBefore } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a valid instance of `Date` whose value occurs before that of ${otherDate}.
       * @example
       * expect(new Date('2019-12-31')).toBeBefore(new Date('2020-01-01'));
       */
      toBeBefore(otherDate: Date): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a valid instance of `Date` whose value occurs before that of ${otherDate}.
       * @example
       * expect(new Date('2019-12-31')).toEqual(
       *   expect.toBeBefore(new Date('2020-01-01'))
       * );
       */
      toBeBefore<T>(otherDate: Date): JestMatchers<T>;
    }
  }
}

export const toBeBeforeMatcher = (value: any, otherDate: Date) =>
  createResult({
    message: () =>
      `expected ${printReceived(value)} to be an instance of Date, occurring before ${printExpected(
        otherDate,
      )}`,
    notMessage: () =>
      `expected ${printReceived(
        value,
      )} not to be an instance of Date, occurring before ${printExpected(otherDate)}`,
    pass: isBefore(otherDate, value),
  });

expect.extend({ toBeBefore: toBeBeforeMatcher });
