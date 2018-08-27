import { isEmptyString } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that a value is a valid `String` containing no characters.
       * @example
       * expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ nickname: expect.toBeEmptyString() }));
       */
      toBeEmptyString<T>(): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * Asserts that a value is a valid `String` containing no characters.
       * @example
       * expect(defaults.nickname).toBeEmptyString();
       */
      toBeEmptyString(): R;
    }
  }
}

export const toBeEmptyStringMatcher = (received: any) =>
  createResult({
    message: () => `expected ${received} to be an empty string or empty instance of String`,
    notMessage: () => `expected ${received} not to be an empty string or empty instance of String`,
    pass: isEmptyString(received)
  });

expect.extend({ toBeEmptyString: toBeEmptyStringMatcher });
