/// <reference types="jasmine" />

import { isNumber } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is a valid `Number` or `new Number()` and not `NaN`.
       * @example
       * expect(8).toBeNumber();
       */
      toBeNumber(): boolean;
    }
  }
}

export const toBeNumberMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown) {
      const pass = isNumber(value);
      const message = pass
        ? `expected ${printReceived(value)} not to be a valid number`
        : `expected ${printReceived(value)} to be a valid number`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeNumber: toBeNumberMatcher,
  });
});
