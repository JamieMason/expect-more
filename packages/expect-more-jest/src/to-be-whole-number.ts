import { isWholeNumber } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that ${value} is a `Number` with no positive decimal places.
       * @example
       * expect(8).toBeWholeNumber();
       */
      toBeWholeNumber(): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a `Number` with no positive decimal places.
       * @example
       * expect(8).toEqual(
       *   expect.toBeWholeNumber()
       * );
       */
      toBeWholeNumber<T>(): JestMatchers<T>;
    }
  }
}

export const toBeWholeNumberMatcher = (value: unknown): jest.CustomMatcherResult =>
  createResult({
    message: () => `expected ${printReceived(value)} to be a whole number`,
    notMessage: () => `expected ${printReceived(value)} not to be a whole number`,
    pass: isWholeNumber(value),
  });

expect.extend({ toBeWholeNumber: toBeWholeNumberMatcher });
