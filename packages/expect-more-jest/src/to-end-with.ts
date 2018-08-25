import { endsWith } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      toEndWith<T>(other: string): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * Asserts that a value is a `String` whose trailing characters are `other` string.
       * @param other
       * @example
       * expect(tvChannel.name).toEndWith(' HD');
       * @example
       * expect(tvChannel.name).toEqual(expect.toEndWith(' HD'));
       * @example
       * expect(tvChannel).toEqual(
       *   expect.objectContaining({
       *     name: expect.toEndWith(' HD')
       *   })
       * );
       * @example
       * expect(onPress).toHaveBeenCalledWith(
       *   expect.objectContaining({
       *     name: expect.toEndWith(' HD')
       *   })
       * );
       */
      toEndWith(other: string): R;
    }
  }
}

export const toEndWithMatcher = (received: any, other: string) =>
  createResult({
    message: () => `expected ${received} to be a string which ends with ${other}`,
    notMessage: () => `expected ${received} not to be a string which ends with ${other}`,
    pass: endsWith(other, received)
  });

expect.extend({ toEndWith: toEndWithMatcher });
