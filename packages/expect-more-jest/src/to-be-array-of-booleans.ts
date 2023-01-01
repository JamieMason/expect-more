/// <reference types="jest" />

import { isArrayOfBooleans } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is an `Array` containing only `Boolean` values.
       * @example
       * expect([true, false, new Boolean(true)]).toBeArrayOfBooleans();
       */
      toBeArrayOfBooleans(): R;
    }
    interface Expect {
      /**
       * Asserts that a value is an `Array` containing only `Boolean` values.
       * @example
       * expect([true, false, new Boolean(true)]).toEqual(
       *   expect.toBeArrayOfBooleans()
       * );
       */
      toBeArrayOfBooleans<T>(): JestMatchers<T>;
    }
  }
}

export const toBeArrayOfBooleansMatcher = (value: unknown): jest.CustomMatcherResult =>
  createResult({
    message: () =>
      `expected ${printReceived(value)} to be a non-empty array, containing only boolean values`,
    notMessage: () =>
      `expected ${printReceived(
        value,
      )} not to be a non-empty array, containing only boolean values`,
    pass: isArrayOfBooleans(value),
  });

expect.extend({ toBeArrayOfBooleans: toBeArrayOfBooleansMatcher });
