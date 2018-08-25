import { isNumber } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      toBeNumber<T>(): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * Asserts that a value is a valid `Number` and not `NaN`.
       * @example
       * expect(player.age).toBeNumber();
       */
      toBeNumber(): R;
    }
  }
}

export const toBeNumberMatcher = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a valid number`,
    notMessage: () => `expected ${received} not to be a valid number`,
    pass: isNumber(received)
  });

expect.extend({ toBeNumber: toBeNumberMatcher });
