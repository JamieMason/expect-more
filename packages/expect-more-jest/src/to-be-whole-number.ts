import { isWholeNumber } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that a value is a `Number` with no positive decimal places.
       * @example
       * expect(onPress).toHaveBeenCalledWith(
       *   expect.objectContaining({
       *     livesRemaining: expect.toBeWholeNumber()
       *   })
       * );
       */
      toBeWholeNumber<T>(): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * Asserts that a value is a `Number` with no positive decimal places.
       * @example
       * expect(player.livesRemaining).toBeWholeNumber();
       */
      toBeWholeNumber(): R;
    }
  }
}

export const toBeWholeNumberMatcher = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a whole number`,
    notMessage: () => `expected ${received} not to be a whole number`,
    pass: isWholeNumber(received)
  });

expect.extend({ toBeWholeNumber: toBeWholeNumberMatcher });
