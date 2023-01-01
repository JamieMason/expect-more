/// <reference types="jasmine" />

import { isJsonString } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is a `String` of valid JSON.
       * @example
       * expect('{"i":"am valid JSON"}').toBeJsonString();
       */
      toBeJsonString(): boolean;
    }
  }
}

export const toBeJsonStringMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown) {
      const pass = isJsonString(value);
      const message = pass
        ? `expected ${printReceived(value)} not to be a string of valid JSON`
        : `expected ${printReceived(value)} to be a string of valid JSON`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeJsonString: toBeJsonStringMatcher,
  });
});
