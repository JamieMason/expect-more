import { isNegativeNumber } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is a `Number` less than 0.
       * @example
       * expect(-18).toBeNegativeNumber();
       */
      toBeNegativeNumber(): boolean;
    }
  }
}

export const toBeNegativeNumberMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown) {
      const pass = isNegativeNumber(value);
      const message = pass
        ? `expected ${printReceived(value)} not to be a negative number`
        : `expected ${printReceived(value)} to be a negative number`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeNegativeNumber: toBeNegativeNumberMatcher,
  });
});
