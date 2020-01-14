import { isArrayOfNumbers } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that a value is an `Array` containing only `Number` values.
       * @example
       * expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ highScores: expect.toBeArrayOfNumbers() }));
       */
      toBeArrayOfNumbers<T>(): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts that a value is an `Array` containing only `Number` values.
       * @example
       * expect(player.highScores).toBeArrayOfNumbers();
       */
      toBeArrayOfNumbers(): R;
    }
  }
}

export const toBeArrayOfNumbersMatcher = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a non-empty array, containing only numbers`,
    notMessage: () => `expected ${received} not to be a non-empty array, containing only numbers`,
    pass: isArrayOfNumbers(received),
  });

expect.extend({ toBeArrayOfNumbers: toBeArrayOfNumbersMatcher });
