/// <reference types="jasmine" />

import { isBoolean } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is `true`, `false`, `new Boolean(true)`, or `new Boolean(false)`.
       * @example
       * expect(false).toBeBoolean();
       */
      toBeBoolean(): boolean;
    }
  }
}

export const toBeBooleanMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown) {
      const pass = isBoolean(value);
      const message = pass
        ? `expected ${printReceived(value)} not to be true, false, or an instance of Boolean`
        : `expected ${printReceived(value)} to be true, false, or an instance of Boolean`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeBoolean: toBeBooleanMatcher,
  });
});
