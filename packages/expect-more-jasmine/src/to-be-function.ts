/// <reference types="jasmine" />

import { isFunction } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is a `Function`.
       * @example
       * expect(() => 'i am a function').toBeFunction();
       */
      toBeFunction(): boolean;
    }
  }
}

export const toBeFunctionMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown) {
      const pass = isFunction(value);
      const message = pass
        ? `expected ${printReceived(value)} not to be a function or async function`
        : `expected ${printReceived(value)} to be a function or async function`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeFunction: toBeFunctionMatcher,
  });
});
