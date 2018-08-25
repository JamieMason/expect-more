import { isNonEmptyString } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      toBeNonEmptyString<T>(): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * Asserts that a value is a valid `String` containing at least one character.
       * @example
       * expect(passwordField.value).toBeNonEmptyString();
       * @example
       * expect(player.name).toEqual(expect.toBeNonEmptyString());
       * @example
       * expect(player).toEqual(
       *   expect.objectContaining({
       *     name: expect.toBeNonEmptyString()
       *   })
       * );
       * @example
       * expect(onPress).toHaveBeenCalledWith(
       *   expect.objectContaining({
       *     name: expect.toBeNonEmptyString()
       *   })
       * );
       */
      toBeNonEmptyString(): R;
    }
  }
}

export const toBeNonEmptyStringMatcher = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a string with at least one character`,
    notMessage: () => `expected ${received} not to be a string with at least one character`,
    pass: isNonEmptyString(received)
  });

expect.extend({ toBeNonEmptyString: toBeNonEmptyStringMatcher });
