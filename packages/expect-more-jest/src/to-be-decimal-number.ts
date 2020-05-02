import { isDecimalNumber } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a `Number` with positive decimal places.
       * @example
       * expect(12.55).toBeDecimalNumber();
       */
      toBeDecimalNumber(): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a `Number` with positive decimal places.
       * @example
       * expect(12.55).toEqual(
       *   expect.toBeDecimalNumber()
       * );
       */
      toBeDecimalNumber<T>(): JestMatchers<T>;
    }
  }
}

export const toBeDecimalNumberMatcher = (value: any) =>
  createResult({
    message: () => `expected ${printReceived(value)} to be a number with positive decimal places`,
    notMessage: () =>
      `expected ${printReceived(value)} not to be a number with positive decimal places`,
    pass: isDecimalNumber(value),
  });

expect.extend({ toBeDecimalNumber: toBeDecimalNumberMatcher });
