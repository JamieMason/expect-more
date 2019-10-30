import { isWhitespace } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that a value is a `String` containing only whitespace characters.
       * @example
       * expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ dataRemoved: expect.toBeWhitespace() }));
       */
      toBeWhitespace<T>(): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts that a value is a `String` containing only whitespace characters.
       * @example
       * expect(htmlMinify.dataRemoved).toBeWhitespace();
       */
      toBeWhitespace(): R;
    }
  }
}

export const toBeWhitespaceMatcher = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a string containing only whitespace characters`,
    notMessage: () => `expected ${received} not to be a string containing only whitespace characters`,
    pass: isWhitespace(received)
  });

expect.extend({ toBeWhitespace: toBeWhitespaceMatcher });
