import { isString } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a `String` or `new String()`.
       * @example
       * expect('i am a string').toBeString();
       */
      toBeString(): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a `String` or `new String()`.
       * @example
       * expect('i am a string').toEqual(
       *   expect.toBeString()
       * );
       */
      toBeString<T>(): JestMatchers<T>;
    }
  }
}

export const toBeStringMatcher = (value: any) =>
  createResult({
    message: () => `expected ${value} to be a string`,
    notMessage: () => `expected ${value} not to be a string`,
    pass: isString(value),
  });

expect.extend({ toBeString: toBeStringMatcher });
