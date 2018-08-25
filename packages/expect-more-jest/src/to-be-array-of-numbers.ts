import { isArrayOfNumbers } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      toBeArrayOfNumbers<T>(): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * Asserts that a value is an `Array` containing only `Number` values.
       * @example
       * expect(player.highScores).toBeArrayOfNumbers();
       * @example
       * expect(player.highScores).toEqual(expect.toBeArrayOfNumbers());
       * @example
       * expect(player).toEqual(
       *   expect.objectContaining({
       *     highScores: expect.toBeArrayOfNumbers()
       *   })
       * );
       * @example
       * expect(onPress).toHaveBeenCalledWith(
       *   expect.objectContaining({
       *     highScores: expect.toBeArrayOfNumbers()
       *   })
       * );
       */
      toBeArrayOfNumbers(): R;
    }
  }
}

export const toBeArrayOfNumbersMatcher = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a non-empty array, containing only numbers`,
    notMessage: () => `expected ${received} not to be a non-empty array, containing only numbers`,
    pass: isArrayOfNumbers(received)
  });

expect.extend({ toBeArrayOfNumbers: toBeArrayOfNumbersMatcher });
