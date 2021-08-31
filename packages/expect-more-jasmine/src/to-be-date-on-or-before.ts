import { isDateOnOrBefore } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is an instance of `Date` occurring on or before the exact date and time of another.
       * @example
       * expect(new Date('2019-12-15')).toBeDateOnOrBefore(new Date('2019-12-31'));
       */
      toBeDateOnOrBefore(other: unknown): boolean;
    }
  }
}

export const toBeDateOnOrBeforeMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, other: unknown) {
      const pass = isDateOnOrBefore(other, value);
      const message = pass
        ? `expected ${printReceived(
            value,
          )} not to be an instance of Date occurring on or before ${printExpected(other)}`
        : `expected ${printReceived(
            value,
          )} to be an instance of Date occurring on or before ${printExpected(other)}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeDateOnOrBefore: toBeDateOnOrBeforeMatcher,
  });
});
