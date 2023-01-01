/// <reference types="jasmine" />

import { isDate } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is an instance of `Date`.
       * @example
       * expect(new Date('2019-12-31')).toBeDate();
       */
      toBeDate(): boolean;
    }
  }
}

export const toBeDateMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown) {
      const pass = isDate(value);
      const message = pass
        ? `expected ${printReceived(value)} not to be an instance of Date`
        : `expected ${printReceived(value)} to be an instance of Date`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeDate: toBeDateMatcher,
  });
});
