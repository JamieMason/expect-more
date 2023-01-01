import { equals } from '@jest/expect-utils';
import { isArray } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is an `Array` where every member is equal to ${other}.
       * @example
       * expect([{ name: 'Guybrush' }, { name: 'Elaine' }]).toBeArrayOf({
       *   name: expect.toBeNonEmptyString()
       * });
       */
      toBeArrayOf(other: unknown): R;
    }
    interface Expect {
      /**
       * Asserts that a value is an `Array` containing only `Boolean` values.
       * @example
       * expect([{ name: 'Guybrush' }, { name: 'Elaine' }]).toEqual(
       *   expect.toBeArrayOf({ name: expect.toBeNonEmptyString() })
       * );
       */
      toBeArrayOf<T>(other: unknown): JestMatchers<T>;
    }
  }
}

export const toBeArrayOfMatcher = (value: unknown, other: unknown): jest.CustomMatcherResult =>
  createResult({
    message: () =>
      `expected ${printReceived(
        value,
      )} to be an array, containing only values equal to ${printExpected(other)}`,
    notMessage: () =>
      `expected ${printReceived(
        value,
      )} not to be a non-empty array, containing only values equal to ${printExpected(other)}`,
    pass: isArray(value) && value.every((member) => equals(member, other)),
  });

expect.extend({ toBeArrayOf: toBeArrayOfMatcher });
