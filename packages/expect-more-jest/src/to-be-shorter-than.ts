import { isShorterThan } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a `String` or `Array` whose length is less than that of ${otherStringOrArray}.
       * @example
       * expect(['i have one item']).toBeShorterThan(['i', 'have', 4, 'items']);
       */
      toBeShorterThan(otherStringOrArray: string | any[]): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a `String` or `Array` whose length is less than that of ${otherStringOrArray}.
       * @example
       * expect(['i have one item']).toEqual(
       *   expect.toBeShorterThan(['i', 'have', 4, 'items'])
       * );
       */
      toBeShorterThan<T>(otherStringOrArray: string | any[]): JestMatchers<T>;
    }
  }
}

export const toBeShorterThanMatcher = (value: any, otherStringOrArray: string | any[]) =>
  createResult({
    message: () => `expected ${value} to be a string or array whose length is less than that of ${otherStringOrArray}`,
    notMessage: () =>
      `expected ${value} not to be a string or array whose length is less than that of ${otherStringOrArray}`,
    pass: isShorterThan(otherStringOrArray, value),
  });

expect.extend({ toBeShorterThan: toBeShorterThanMatcher });
