/// <reference types="jasmine" />

import { isEmptyString } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is a valid `String` containing no characters.
       * @example
       * expect('').toBeEmptyString();
       */
      toBeEmptyString(): boolean;
    }
  }
}

export const toBeEmptyStringMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown) {
      const pass = isEmptyString(value);
      const message = pass
        ? `expected ${printReceived(value)} not to be an empty string or empty instance of String`
        : `expected ${printReceived(value)} to be an empty string or empty instance of String`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeEmptyString: toBeEmptyStringMatcher,
  });
});
