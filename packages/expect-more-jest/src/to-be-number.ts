import { isNumber } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that a value is a valid `Number` or `new Number()` and not `NaN`.
       * @param other
       * @example
       * expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ age: expect.toBeNumber() }));
       */
      toBeNumber<T>(): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts that a value is a valid `Number` or `new Number()` and not `NaN`.
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
    pass: isNumber(received),
  });

expect.extend({ toBeNumber: toBeNumberMatcher });
