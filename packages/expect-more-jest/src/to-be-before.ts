import { isBefore } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that a value is a valid instance of `Date` whose value occurs before that of `other` Date.
       * @param other
       * @example
       * expect(onPress).toHaveBeenCalledWith(
       *   expect.objectContaining({
       *     releaseDate: expect.toBeBefore(new Date('1990-10-15'))
       *   })
       * );
       */
      toBeBefore<T>(other: Date): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * Asserts that a value is a valid instance of `Date` whose value occurs before that of `other` Date.
       * @param other
       * @example
       * expect(game.releaseDate).toBeBefore(new Date('1990-10-15'));
       */
      toBeBefore(other: Date): R;
    }
  }
}

export const toBeBeforeMatcher = (received: any, other: Date) =>
  createResult({
    message: () => `expected ${received} to be an instance of Date, occurring before ${other}`,
    notMessage: () => `expected ${received} not to be an instance of Date, occurring before ${other}`,
    pass: isBefore(other, received)
  });

expect.extend({ toBeBefore: toBeBeforeMatcher });
