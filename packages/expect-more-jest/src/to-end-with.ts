import { endsWith } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that a value is a `String` whose trailing characters are `other` string.
       * @param other
       * @example
       * expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ name: expect.toEndWith(' HD') }));
       */
      toEndWith<T>(other: string): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts that a value is a `String` whose trailing characters are `other` string.
       * @param other
       * @example
       * expect(tvChannel.name).toEndWith(' HD');
       */
      toEndWith(other: string): R;
    }
  }
}

export const toEndWithMatcher = (received: any, other: string) =>
  createResult({
    message: () => `expected ${received} to be a string which ends with ${other}`,
    notMessage: () => `expected ${received} not to be a string which ends with ${other}`,
    pass: endsWith(other, received),
  });

expect.extend({ toEndWith: toEndWithMatcher });
