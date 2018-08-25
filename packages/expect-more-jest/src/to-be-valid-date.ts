import { isValidDate } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      toBeValidDate<T>(): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * Asserts that a value is an instance of `Date` whose _value_ is valid. `Date` is little like `Promise` in that
       * it is a container for a value. `new Date('wut?')` for example, is a valid `Date` which wraps a value which is
       * _not_ valid.
       * @example
       * expect(game.releaseDate).toBeValidDate();
       * @example
       * expect(game.releaseDate).toEqual(expect.toBeValidDate());
       * @example
       * expect(game).toEqual(
       *   expect.objectContaining({
       *     releaseDate: expect.toBeValidDate()
       *   })
       * );
       * @example
       * expect(onPress).toHaveBeenCalledWith(
       *   expect.objectContaining({
       *     releaseDate: expect.toBeValidDate()
       *   })
       * );
       */
      toBeValidDate(): R;
    }
  }
}

export const toBeValidDateMatcher = (received: any) =>
  createResult({
    message: () => `expected ${received} to be an instance of Date with a valid value`,
    notMessage: () => `expected ${received} not to be an instance of Date with a valid value`,
    pass: isValidDate(received)
  });

expect.extend({ toBeValidDate: toBeValidDateMatcher });
