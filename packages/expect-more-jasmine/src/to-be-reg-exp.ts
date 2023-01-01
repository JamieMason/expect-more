/// <reference types="jasmine" />

import { isRegExp } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is a `RegExp`.
       * @example
       * expect(new RegExp('i am a regular expression')).toBeRegExp();
       */
      toBeRegExp(): boolean;
    }
  }
}

export const toBeRegExpMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown) {
      const pass = isRegExp(value);
      const message = pass
        ? `expected ${printReceived(value)} not to be a regular expression`
        : `expected ${printReceived(value)} to be a regular expression`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeRegExp: toBeRegExpMatcher,
  });
});
