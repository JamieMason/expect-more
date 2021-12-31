import { isUndefined, isNull } from 'expect-more';
import { equals } from 'expect/build/jasmineUtils';
import { printExpected, printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is equal to ${other} or undefined or null.
       * @example
       * expect({ x: 12, y: 22 }).toBeOptionalOf({
       *   x: expect.toBeNumber(),
       *   y: expect.toBeNumber(),
       * });
       * expect(undefined).toBeOptionalOf({
       *   x: expect.toBeNumber(),
       *   y: expect.toBeNumber(),
       * });
       * expect(null).toBeOptionalOf({
       *   x: expect.toBeNumber(),
       *   y: expect.toBeNumber(),
       * });
       */
      toBeOptionalOf(other: unknown): R;
    }
    interface Expect {
      /**
       * Asserts that a value is equal to ${other} or undefined or null.
       * @example
       * expect({ x: 12, y: 22 }).toEqual(
       *   expect.toBeOptionalOf({
       *     x: expect.toBeNumber(),
       *     y: expect.toBeNumber()
       *   })
       * );
       * expect(undefined).toEqual(
       *   expect.toBeOptionalOf({
       *     x: expect.toBeNumber(),
       *     y: expect.toBeNumber()
       *   })
       * );
       * expect(null).toBeOptionalOf({
       *   x: expect.toBeNumber(),
       *   y: expect.toBeNumber(),
       * });
       */
      toBeOptionalOf<T>(other: unknown): JestMatchers<T>;
    }
  }
}

export const toBeOptionalOfMatcher = (value: unknown, other: unknown): jest.CustomMatcherResult =>
  createResult({
    message: () =>
      `expected ${printReceived(value)} to equal ${printExpected(other)} or ${printExpected(
        undefined,
      )} or ${printExpected(null)}`,
    notMessage: () =>
      `expected ${printReceived(value)} not to equal ${printExpected(other)} or ${printExpected(
        undefined,
      )} or ${printExpected(null)}`,
    pass: isUndefined(value) || isNull(value) || equals(value, other),
  });

expect.extend({ toBeOptionalOf: toBeOptionalOfMatcher });
