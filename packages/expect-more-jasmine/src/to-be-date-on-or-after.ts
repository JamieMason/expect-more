/// <reference types="jasmine" />

import { isDateOnOrAfter } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is an instance of `Date` occurring on or after the exact date and time of another.
       * @example
       * expect(new Date('2019-12-31')).toBeDateOnOrAfter(new Date('2019-12-15'));
       */
      toBeDateOnOrAfter(other: unknown): boolean;
    }
  }
}

export const toBeDateOnOrAfterMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, other: unknown) {
      const pass = isDateOnOrAfter(other, value);
      const message = pass
        ? `expected ${printReceived(
            value,
          )} not to be an instance of Date occurring on or after ${printExpected(other)}`
        : `expected ${printReceived(
            value,
          )} to be an instance of Date occurring on or after ${printExpected(other)}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeDateOnOrAfter: toBeDateOnOrAfterMatcher,
  });
});
