import { isDate } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      toBeDate<T>(): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * Asserts that a value is an instance of `Date`.
       * @example
       * expect(game.releaseDate).toBeDate();
       */
      toBeDate(): R;
    }
  }
}

export const toBeDateMatcher = (received: any) =>
  createResult({
    message: () => `expected ${received} to be an instance of Date`,
    notMessage: () => `expected ${received} not to be an instance of Date`,
    pass: isDate(received)
  });

expect.extend({ toBeDate: toBeDateMatcher });
