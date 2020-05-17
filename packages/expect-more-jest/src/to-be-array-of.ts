import { isArray } from 'expect-more';
import { equals } from 'expect/build/jasmineUtils';
import { printExpected, printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is an `Array` where every member is equal to ${other}.
       * @example
       * expect([{ name: 'Guybrush' }, { name: 'Elaine' }]).toBeArrayOf({
       *   name: expect.toBeNonEmptyString()
       * });
       */
      toBeArrayOf(other: any): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is an `Array` containing only `Boolean` values.
       * @example
       * expect([{ name: 'Guybrush' }, { name: 'Elaine' }]).toEqual(
       *   expect.toBeArrayOf({ name: expect.toBeNonEmptyString() })
       * );
       */
      toBeArrayOf<T>(other: any): JestMatchers<T>;
    }
  }
}

export const toBeArrayOfMatcher = (value: any, other: any) =>
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
