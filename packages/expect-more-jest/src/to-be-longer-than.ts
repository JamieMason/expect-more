import { isLongerThan } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a `String` or `Array` whose length is greater than that of ${otherStringOrArray}.
       * @example
       * expect(['i', 'have', 3]).toBeLongerThan([2, 'items']);
       */
      toBeLongerThan(otherStringOrArray: string | any[]): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a `String` or `Array` whose length is greater than that of ${otherStringOrArray}.
       * @example
       * expect(['i', 'have', 3]).toEqual(
       *   expect.toBeLongerThan([2, 'items'])
       * );
       */
      toBeLongerThan<T>(otherStringOrArray: string | any[]): JestMatchers<T>;
    }
  }
}

export const toBeLongerThanMatcher = (value: any, otherStringOrArray: string | any[]) =>
  createResult({
    message: () =>
      `expected ${value} to be a string or array whose length is greater than that of ${otherStringOrArray}`,
    notMessage: () =>
      `expected ${value} not to be a string or array whose length is greater than that of ${otherStringOrArray}`,
    pass: isLongerThan(otherStringOrArray, value),
  });

expect.extend({ toBeLongerThan: toBeLongerThanMatcher });
