import { startsWith } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that a value is a `String` whose leading characters are `other` string.
       * @param other
       * @example
       * expect(onPress).toHaveBeenCalledWith(
       *   expect.objectContaining({
       *     postcode: expect.toStartWith('LS1')
       *   })
       * );
       */
      toStartWith<T>(other: string): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * Asserts that a value is a `String` whose leading characters are `other` string.
       * @param other
       * @example
       * expect(location.postcode).toStartWith('LS1');
       */
      toStartWith(other: string): R;
    }
  }
}

export const toStartWithMatcher = (received: any, other: string) =>
  createResult({
    message: () => `expected ${received} to be a string which starts with ${other}`,
    notMessage: () => `expected ${received} not to be a string which starts with ${other}`,
    pass: startsWith(other, received)
  });

expect.extend({ toStartWith: toStartWithMatcher });
