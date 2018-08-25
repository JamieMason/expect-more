import { isAfter } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      toBeAfter<T>(other: Date): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * Asserts that a value is a valid instance of `Date` whose value occurs after that of `other` Date.
       * @param other
       * @example
       * expect(game.releaseDate).toBeAfter(new Date('1990-10-15'));
       * @example
       * expect(game.releaseDate).toEqual(expect.toBeAfter(new Date('1990-10-15')));
       * @example
       * expect(game).toEqual(
       *   expect.objectContaining({
       *     releaseDate: expect.toBeAfter(new Date('1990-10-15'))
       *   })
       * );
       * @example
       * expect(onPress).toHaveBeenCalledWith(
       *   expect.objectContaining({
       *     releaseDate: expect.toBeAfter(new Date('1990-10-15'))
       *   })
       * );
       */
      toBeAfter(other: Date): R;
    }
  }
}

export const toBeAfterMatcher = (received: any, other: Date) =>
  createResult({
    message: () => `expected ${received} to be an instance of Date, occurring after ${other}`,
    notMessage: () => `expected ${received} not to be an instance of Date, occurring after ${other}`,
    pass: isAfter(other, received)
  });

expect.extend({ toBeAfter: toBeAfterMatcher });
