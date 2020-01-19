import { isWholeNumber } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R, T> {
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

export const toBeWholeNumberMatcher = (value: any) =>
  createResult({
    message: () => `expected ${value} to be a whole number`,
    notMessage: () => `expected ${value} not to be a whole number`,
    pass: isWholeNumber(value),
  });

expect.extend({ toBeWholeNumber: toBeWholeNumberMatcher });
