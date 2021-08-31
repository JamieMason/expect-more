import { isSameLengthAs } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is a `String` or `Array` whose length is the same as that of the other provided.
       * @example
       * expect(['i also have', '2 items']).toBeSameLengthAs(['i have', '2 items']);
       */
      toBeSameLengthAs(other: string | any[]): R;
    }
    interface Expect {
      /**
       * Asserts that a value is a `String` or `Array` whose length is the same as that of the other provided.
       * @example
       * expect(['i also have', '2 items']).toEqual(
       *   expect.toBeSameLengthAs(['i have', '2 items'])
       * );
       */
      toBeSameLengthAs<T>(other: string | any[]): JestMatchers<T>;
    }
  }
}

export const toBeSameLengthAsMatcher = (
  value: unknown,
  other: string | any[],
): jest.CustomMatcherResult =>
  createResult({
    message: () =>
      `expected ${printReceived(
        value,
      )} to be a string or array whose length is the same as that of ${printExpected(other)}`,
    notMessage: () =>
      `expected ${printReceived(
        value,
      )} not to be a string or array whose length is the same as that of ${printExpected(other)}`,
    pass: isSameLengthAs(other, value),
  });

expect.extend({ toBeSameLengthAs: toBeSameLengthAsMatcher });
