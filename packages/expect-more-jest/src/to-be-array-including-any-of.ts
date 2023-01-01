/// <reference types="jest" />

import { isArrayIncludingAnyOf } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that `value` is an `Array` including at least one of the members of `values`.
       * @example
       * expect([12, 0, 14, 'Ginola']).toBeArrayIncludingAnyOf(['Ginola', 3]);
       */
      toBeArrayIncludingAnyOf(values: unknown[]): R;
    }
    interface Expect {
      /**
       * Asserts that `value` is an `Array` including at least one of the members of `values`.
       * @example
       * expect([12, 0, 14, 'Ginola']).toEqual(
       *   expect.toBeArrayIncludingAnyOf(['Ginola', 3])
       * );
       */
      toBeArrayIncludingAnyOf<T>(values: unknown[]): JestMatchers<T>;
    }
  }
}

export const toBeArrayIncludingAnyOfMatcher = (
  value: unknown,
  values: unknown[],
): jest.CustomMatcherResult =>
  createResult({
    message: () =>
      `expected ${printReceived(value)} to include at least one of the values in ${printExpected(
        values,
      )}`,
    notMessage: () =>
      `expected ${printReceived(
        value,
      )} not to include at least one of the values in ${printExpected(values)}`,
    pass: isArrayIncludingAnyOf(values, value),
  });

expect.extend({ toBeArrayIncludingAnyOf: toBeArrayIncludingAnyOfMatcher });
