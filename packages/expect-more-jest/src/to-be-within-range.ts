import { isWithinRange } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that ${value} is a `Number` which is both greater than or equal to ${floor} and less than or equal to ${ceiling}.
       * @example
       * expect(7).toBeWithinRange(0, 10);
       */
      toBeWithinRange(floor: number, ceiling: number): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a `Number` which is both greater than or equal to ${floor} and less than or equal to ${ceiling}.
       * @example
       * expect(7).toEqual(
       *   expect.toBeWithinRange(0, 10)
       * );
       */
      toBeWithinRange<T>(floor: number, ceiling: number): JestMatchers<T>;
    }
  }
}

export const toBeWithinRangeMatcher = (
  value: unknown,
  floor: number,
  ceiling: number,
): jest.CustomMatcherResult =>
  createResult({
    message: () =>
      `expected ${printReceived(value)} to be greater than or equal to ${printExpected(
        floor,
      )} and less than or equal to ${printExpected(ceiling)}`,
    notMessage: () =>
      `expected ${printReceived(value)} not to be greater than or equal to ${printExpected(
        floor,
      )} and less than or equal to ${printExpected(ceiling)}`,
    pass: isWithinRange(floor, ceiling, value),
  });

expect.extend({ toBeWithinRange: toBeWithinRangeMatcher });
