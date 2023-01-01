/// <reference types="jasmine" />

import { isNonEmptyString } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is a valid `String` containing at least one character.
       * @example
       * expect('i am not empty').toBeNonEmptyString();
       */
      toBeNonEmptyString(): boolean;
    }
  }
}

export const toBeNonEmptyStringMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown) {
      const pass = isNonEmptyString(value);
      const message = pass
        ? `expected ${printReceived(value)} not to be a string with at least one character`
        : `expected ${printReceived(value)} to be a string with at least one character`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeNonEmptyString: toBeNonEmptyStringMatcher,
  });
});
