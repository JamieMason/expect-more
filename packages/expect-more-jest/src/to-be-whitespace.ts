import { isWhitespace } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      toBeWhitespace<T>(): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * Asserts that a value is a `String` containing only whitespace characters.
       * @example
       * expect(htmlMinify.dataRemoved).toBeWhitespace();
       * @example
       * expect(htmlMinify.dataRemoved).toEqual(expect.toBeWhitespace());
       * @example
       * expect(htmlMinify).toEqual(
       *   expect.objectContaining({
       *     dataRemoved: expect.toBeWhitespace()
       *   })
       * );
       * @example
       * expect(onPress).toHaveBeenCalledWith(
       *   expect.objectContaining({
       *     dataRemoved: expect.toBeWhitespace()
       *   })
       * );
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
