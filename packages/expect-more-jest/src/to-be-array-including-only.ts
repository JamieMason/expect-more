import { isArrayIncludingOnly } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is an `Array` including only the values provided in the given `allowedValues` array and no others. The order and number of times each value appears in either array does not matter. Returns true unless `value` contains a value which does not feature in `allowedValues`.
       * @example
       * expect([5, 10, 1]).toBeArrayIncludingOnly([1, 5, 10]);
       */
      toBeArrayIncludingOnly(allowedValues: unknown[]): R;
    }
    interface Expect {
      /**
       * Asserts that a value is an `Array` including only the values provided in the given `allowedValues` array and no others. The order and number of times each value appears in either array does not matter. Returns true unless `value` contains a value which does not feature in `allowedValues`.
       * @example
       * expect([5, 10, 1]).toEqual(
       *   expect.toBeArrayIncludingOnly([1, 5, 10])
       * );
       */
      toBeArrayIncludingOnly<T>(allowedValues: unknown[]): JestMatchers<T>;
    }
  }
}

export const toBeArrayIncludingOnlyMatcher = (
  value: unknown,
  allowedValues: unknown[],
): jest.CustomMatcherResult =>
  createResult({
    message: () =>
      `expected ${printReceived(value)} to only include values featured in ${printExpected(
        allowedValues,
      )} and no others`,
    notMessage: () =>
      `expected ${printReceived(value)} not to only include values featured in ${printExpected(
        allowedValues,
      )} and no others`,
    pass: isArrayIncludingOnly(allowedValues, value),
  });

expect.extend({ toBeArrayIncludingOnly: toBeArrayIncludingOnlyMatcher });
