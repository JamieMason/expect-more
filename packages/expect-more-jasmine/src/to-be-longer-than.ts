import { isLongerThan } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is a `String` or `Array` whose length is greater than that of another.
       * @example
       * expect(['i', 'have', 3]).toBeLongerThan([2, 'items']);
       */
      toBeLongerThan(other: string | any[]): boolean;
    }
  }
}

export const toBeLongerThanMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, other: string | any[]) {
      const pass = isLongerThan(other, value);
      const message = pass
        ? `expected ${printReceived(
            value,
          )} not to be a string or array whose length is greater than that of ${printExpected(
            other,
          )}`
        : `expected ${printReceived(
            value,
          )} to be a string or array whose length is greater than that of ${printExpected(other)}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeLongerThan: toBeLongerThanMatcher,
  });
});
