import { isBefore } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is a valid instance of `Date` whose value occurs before that of ${otherDate}.
       * @example
       * expect(new Date('2019-12-31')).toBeBefore(new Date('2020-01-01'));
       */
      toBeBefore(otherDate: Date): boolean;
    }
  }
}

export const toBeBeforeMatcher = () => {
  return {
    compare(value: any, otherDate: Date) {
      const pass = isBefore(otherDate, value);
      const message = pass
        ? `expected ${printReceived(
            value,
          )} not to be an instance of Date, occurring before ${printExpected(otherDate)}`
        : `expected ${printReceived(
            value,
          )} to be an instance of Date, occurring before ${printExpected(otherDate)}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeBefore: toBeBeforeMatcher,
  });
});
