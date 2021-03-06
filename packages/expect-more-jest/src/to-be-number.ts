import { isNumber } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a valid `Number` or `new Number()` and not `NaN`.
       * @example
       * expect(8).toBeNumber();
       */
      toBeNumber(): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a valid `Number` or `new Number()` and not `NaN`.
       * @example
       * expect(8).toEqual(
       *   expect.toBeNumber()
       * );
       */
      toBeNumber<T>(): JestMatchers<T>;
    }
  }
}

export const toBeNumberMatcher = (value: any) =>
  createResult({
    message: () => `expected ${printReceived(value)} to be a valid number`,
    notMessage: () => `expected ${printReceived(value)} not to be a valid number`,
    pass: isNumber(value),
  });

expect.extend({ toBeNumber: toBeNumberMatcher });
