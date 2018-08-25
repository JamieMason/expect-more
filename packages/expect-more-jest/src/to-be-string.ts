import { isString } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      toBeString<T>(): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * Asserts that a value is a `String`.
       * @example
       * expect(player.name).toBeString();
       */
      toBeString(): R;
    }
  }
}

export const toBeStringMatcher = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a string`,
    notMessage: () => `expected ${received} not to be a string`,
    pass: isString(received)
  });

expect.extend({ toBeString: toBeStringMatcher });
