import { isSameLengthAs } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a `String` or `Array` whose length is the same as that of ${otherStringOrArray}.
       * @example
       * expect(['i also have', '2 items']).toBeSameLengthAs(['i have', '2 items']);
       */
      toBeSameLengthAs(otherStringOrArray: string | any[]): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a `String` or `Array` whose length is the same as that of ${otherStringOrArray}.
       * @example
       * expect(['i also have', '2 items']).toEqual(
       *   expect.toBeSameLengthAs(['i have', '2 items'])
       * );
       */
      toBeSameLengthAs<T>(otherStringOrArray: string | any[]): JestMatchers<T>;
    }
  }
}

export const toBeSameLengthAsMatcher = (value: any, otherStringOrArray: string | any[]) =>
  createResult({
    message: () =>
      `expected ${value} to be a string or array whose length is the same as that of ${otherStringOrArray}`,
    notMessage: () =>
      `expected ${value} not to be a string or array whose length is the same as that of ${otherStringOrArray}`,
    pass: isSameLengthAs(otherStringOrArray, value),
  });

expect.extend({ toBeSameLengthAs: toBeSameLengthAsMatcher });
