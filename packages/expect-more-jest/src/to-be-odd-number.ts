import { isOddNumber } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that a value is an odd `Number`.
       * @example
       * expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ sides: expect.toBeOddNumber() }));
       */
      toBeOddNumber<T>(): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * Asserts that a value is an odd `Number`.
       * @example
       * expect(triangle.sides).toBeOddNumber();
       */
      toBeOddNumber(): R;
    }
  }
}

export const toBeOddNumberMatcher = (received: any) =>
  createResult({
    message: () => `expected ${received} to be an odd number`,
    notMessage: () => `expected ${received} not to be an odd number`,
    pass: isOddNumber(received)
  });

expect.extend({ toBeOddNumber: toBeOddNumberMatcher });
