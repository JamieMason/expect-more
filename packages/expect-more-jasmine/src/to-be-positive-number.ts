/// <reference types="jasmine" />

import { isPositiveNumber } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is a `Number` greater than 0.
       * @example
       * expect(5).toBePositiveNumber();
       */
      toBePositiveNumber(): boolean;
    }
  }
}

export const toBePositiveNumberMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown) {
      const pass = isPositiveNumber(value);
      const message = pass
        ? `expected ${printReceived(value)} not to be a positive number`
        : `expected ${printReceived(value)} to be a positive number`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBePositiveNumber: toBePositiveNumberMatcher,
  });
});
