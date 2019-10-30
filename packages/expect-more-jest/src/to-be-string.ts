import { isString } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that a value is a `String` or `new String()`.
       * @param other
       * @example
       * expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ name: expect.toBeString() }));
       */
      toBeString<T>(): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts that a value is a `String` or `new String()`.
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
