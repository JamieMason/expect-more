import { isNull } from 'expect-more';
import { equals } from 'expect/build/jasmineUtils';
import { printExpected, printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is equal to ${other} or null.
       * @example
       * expect({ x: 12, y: 22 }).toBeNullableOf({
       *   x: expect.toBeNumber(),
       *   y: expect.toBeNumber(),
       * });
       * expect(null).toBeNullableOf({
       *   x: expect.toBeNumber(),
       *   y: expect.toBeNumber(),
       * });
       */
      toBeNullableOf(other: any): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is equal to ${other} or null.
       * @example
       * expect({ x: 12, y: 22 }).toEqual(
       *   expect.toBeNullableOf({
       *     x: expect.toBeNumber(),
       *     y: expect.toBeNumber()
       *     })
       * );
       * expect(null).toEqual(
       *   expect.toBeNullableOf({
       *     x: expect.toBeNumber(),
       *     y: expect.toBeNumber()
       *     })
       * );
       */
      toBeNullableOf<T>(other: any): JestMatchers<T>;
    }
  }
}

export const toBeNullableOfMatcher = (value: any, other: any) =>
  createResult({
    message: () =>
      `expected ${printReceived(value)} to equal ${printExpected(other)} or ${printExpected(null)}`,
    notMessage: () =>
      `expected ${printReceived(value)} not to equal ${printExpected(other)} or ${printExpected(
        null,
      )}`,
    pass: isNull(value) || equals(value, other),
  });

expect.extend({ toBeNullableOf: toBeNullableOfMatcher });
