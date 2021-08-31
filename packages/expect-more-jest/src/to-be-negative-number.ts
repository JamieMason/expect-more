import { isNegativeNumber } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is a `Number` less than 0.
       * @example
       * expect(-18).toBeNegativeNumber();
       */
      toBeNegativeNumber(): R;
    }
    interface Expect {
      /**
       * Asserts that a value is a `Number` less than 0.
       * @example
       * expect(-18).toEqual(
       *   expect.toBeNegativeNumber()
       * );
       */
      toBeNegativeNumber<T>(): JestMatchers<T>;
    }
  }
}

export const toBeNegativeNumberMatcher = (value: unknown): jest.CustomMatcherResult =>
  createResult({
    message: () => `expected ${printReceived(value)} to be a negative number`,
    notMessage: () => `expected ${printReceived(value)} not to be a negative number`,
    pass: isNegativeNumber(value),
  });

expect.extend({ toBeNegativeNumber: toBeNegativeNumberMatcher });
