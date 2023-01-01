/// <reference types="jasmine" />

import { isVisibleString } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is a valid `String` containing at least one character which is not whitespace.
       * @example
       * expect('i am visible').toBeVisibleString();
       */
      toBeVisibleString(): boolean;
    }
  }
}

export const toBeVisibleStringMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown) {
      const pass = isVisibleString(value);
      const message = pass
        ? `expected ${printReceived(
            value,
          )} not to be a string with at least one non-whitespace character`
        : `expected ${printReceived(
            value,
          )} to be a string with at least one non-whitespace character`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeVisibleString: toBeVisibleStringMatcher,
  });
});
