import { isDateBetween } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is an instance of `Date` occurring on or after `floor` and on or before `ceiling`.
       * @example
       * expect(new Date('2019-12-11')).toBeDateBetween(new Date('2019-12-10'), new Date('2019-12-12'));
       */
      toBeDateBetween(floor: unknown, ceiling: unknown): R;
    }
    interface Expect {
      /**
       * Asserts that a value is an instance of `Date` occurring on or after `floor` and on or before `ceiling`.
       * @example
       * expect(new Date('2019-12-11')).toEqual(
       *   expect.toBeDateBetween(new Date('2019-12-10'), new Date('2019-12-12'))
       * );
       */
      toBeDateBetween<T>(floor: unknown, ceiling: unknown): JestMatchers<T>;
    }
  }
}

export const toBeDateBetweenMatcher = (
  value: unknown,
  floor: unknown,
  ceiling: unknown,
): jest.CustomMatcherResult =>
  createResult({
    message: () =>
      `expected ${printReceived(
        value,
      )} to be an instance of Date occurring on or after ${printExpected(
        floor,
      )} and on or before ${printExpected(ceiling)}`,
    notMessage: () =>
      `expected ${printReceived(
        value,
      )} not to be an instance of Date occurring on or after ${printExpected(
        floor,
      )} and on or before ${printExpected(ceiling)}`,
    pass: isDateBetween(floor, ceiling, value),
  });

expect.extend({ toBeDateBetween: toBeDateBetweenMatcher });
