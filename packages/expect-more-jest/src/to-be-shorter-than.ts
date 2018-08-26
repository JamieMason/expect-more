import { isShorterThan } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that a value is a `String` or `Array` whose length is less than `other`.
       * @param other
       * @example
       * expect(onPress).toHaveBeenCalledWith(
       *   expect.objectContaining({
       *     contents: expect.toBeShorterThan(file.contents)
       *   })
       * );
       */
      toBeShorterThan<T>(other: string): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * Asserts that a value is a `String` or `Array` whose length is less than `other`.
       * @param other
       * @example
       * expect(truncatedFile.contents).toBeShorterThan(file.contents);
       */
      toBeShorterThan(other: string): R;
    }
  }
}

export const toBeShorterThanMatcher = (received: any, other: string) =>
  createResult({
    message: () => `expected ${received} to be a string which is shorter than ${other}`,
    notMessage: () => `expected ${received} not to be a string which is shorter than ${other}`,
    pass: isShorterThan(other, received)
  });

expect.extend({ toBeShorterThan: toBeShorterThanMatcher });
