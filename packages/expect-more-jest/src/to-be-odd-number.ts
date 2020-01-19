import { isOddNumber } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is an odd `Number`.
       * @example
       * expect(5).toBeOddNumber();
       */
      toBeOddNumber(): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is an odd `Number`.
       * @example
       * expect(5).toEqual(
       *   expect.toBeOddNumber()
       * );
       */
      toBeOddNumber<T>(): JestMatchers<T>;
    }
  }
}

export const toBeOddNumberMatcher = (value: any) =>
  createResult({
    message: () => `expected ${value} to be an odd number`,
    notMessage: () => `expected ${value} not to be an odd number`,
    pass: isOddNumber(value),
  });

expect.extend({ toBeOddNumber: toBeOddNumberMatcher });
