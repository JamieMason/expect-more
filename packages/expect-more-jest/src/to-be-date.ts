import { isDate } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that a value is an instance of `Date`.
       * @example
       * expect(onSubmit).toHaveBeenCalledWith(expect.objectContaining({ releaseDate: expect.toBeDate() }));
       */
      toBeDate<T>(): JestMatchers<T>;
    }
    interface Matchers<R, T> {
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
    pass: isDate(received),
  });

expect.extend({ toBeDate: toBeDateMatcher });
