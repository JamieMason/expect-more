import { isDateOnDayOfWeek } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is an instance of `Date` occurring on the day of the week with the given index, where Sunday is `0` and Saturday is `6`.
       * @example
       * expect(new Date('2021-08-29')).toBeDateOnDayOfWeek(0);
       */
      toBeDateOnDayOfWeek(index: number): R;
    }
    interface Expect {
      /**
       * Asserts that a value is an instance of `Date` occurring on the day of the week with the given index, where Sunday is `0` and Saturday is `6`.
       * @example
       * expect(new Date('2021-08-29')).toEqual(
       *   expect.toBeDateOnDayOfWeek(0)
       * );
       */
      toBeDateOnDayOfWeek<T>(index: number): JestMatchers<T>;
    }
  }
}

export const toBeDateOnDayOfWeekMatcher = (
  value: unknown,
  index: number,
): jest.CustomMatcherResult =>
  createResult({
    message: () =>
      `expected ${printReceived(
        value,
      )} to be an instance of Date occurring on the day of the week with index ${printExpected(
        index,
      )}`,
    notMessage: () =>
      `expected ${printReceived(
        value,
      )} not to be an instance of Date occurring on the day of the week with index ${printExpected(
        index,
      )}`,
    pass: isDateOnDayOfWeek(index, value),
  });

expect.extend({ toBeDateOnDayOfWeek: toBeDateOnDayOfWeekMatcher });
