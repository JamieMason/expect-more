/// <reference types="jasmine" />

import { isBefore } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is a valid instance of `Date` whose value occurs before that of another.
       * @example
       * expect(new Date('2019-12-31')).toBeBefore(new Date('2020-01-01'));
       */
      toBeBefore(other: Date): boolean;
    }
  }
}

export const toBeBeforeMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, other: Date) {
      const pass = isBefore(other, value);
      const message = pass
        ? `expected ${printReceived(
            value,
          )} not to be an instance of Date, occurring before ${printExpected(other)}`
        : `expected ${printReceived(
            value,
          )} to be an instance of Date, occurring before ${printExpected(other)}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeBefore: toBeBeforeMatcher,
  });
});
