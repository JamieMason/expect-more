/// <reference types="jasmine" />

import { startsWith } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that value is a string whose trailing characters are equal to those of the provided string.
       * @example
       * expect('JavaScript').toStartWith('Java');
       */
      toStartWith(otherString: string): boolean;
    }
  }
}

export const toStartWithMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, otherString: string) {
      const pass = startsWith(otherString, value);
      const message = pass
        ? `expected ${printReceived(value)} not to start with ${printExpected(otherString)}`
        : `expected ${printReceived(value)} to start with ${printExpected(otherString)}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toStartWith: toStartWithMatcher,
  });
});
