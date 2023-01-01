/// <reference types="jasmine" />

import { isShorterThan } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is a `String` or `Array` whose length is less than that of the other provided.
       * @example
       * expect(['i have one item']).toBeShorterThan(['i', 'have', 4, 'items']);
       */
      toBeShorterThan(other: string | any[]): boolean;
    }
  }
}

export const toBeShorterThanMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, other: string | any[]) {
      const pass = isShorterThan(other, value);
      const message = pass
        ? `expected ${printReceived(
            value,
          )} not to be a string or array whose length is less than that of ${printExpected(other)}`
        : `expected ${printReceived(
            value,
          )} to be a string or array whose length is less than that of ${printExpected(other)}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeShorterThan: toBeShorterThanMatcher,
  });
});
