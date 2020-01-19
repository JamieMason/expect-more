import { isJsonString } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a `String` of valid JSON.
       * @example
       * expect('{"i":"am valid JSON"}').toBeJsonString();
       */
      toBeJsonString(): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a `String` of valid JSON.
       * @example
       * expect('{"i":"am valid JSON"}').toEqual(
       *   expect.toBeJsonString()
       * );
       */
      toBeJsonString<T>(): JestMatchers<T>;
    }
  }
}

export const toBeJsonStringMatcher = (value: any) =>
  createResult({
    message: () => `expected ${value} to be a string of valid JSON`,
    notMessage: () => `expected ${value} not to be a string of valid JSON`,
    pass: isJsonString(value),
  });

expect.extend({ toBeJsonString: toBeJsonStringMatcher });
