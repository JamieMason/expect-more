/// <reference types="jasmine" />

import { isSameLengthAs } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is a `String` or `Array` whose length is the same as that of the other provided.
       * @example
       * expect(['i also have', '2 items']).toBeSameLengthAs(['i have', '2 items']);
       */
      toBeSameLengthAs(other: string | any[]): boolean;
    }
  }
}

export const toBeSameLengthAsMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, other: string | any[]) {
      const pass = isSameLengthAs(other, value);
      const message = pass
        ? `expected ${printReceived(
            value,
          )} not to be a string or array whose length is the same as that of ${printExpected(
            other,
          )}`
        : `expected ${printReceived(
            value,
          )} to be a string or array whose length is the same as that of ${printExpected(other)}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeSameLengthAs: toBeSameLengthAsMatcher,
  });
});
