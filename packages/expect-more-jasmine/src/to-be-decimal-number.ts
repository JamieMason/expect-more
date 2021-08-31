import { isDecimalNumber } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is a `Number` with positive decimal places.
       * @example
       * expect(12.55).toBeDecimalNumber();
       */
      toBeDecimalNumber(): boolean;
    }
  }
}

export const toBeDecimalNumberMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown) {
      const pass = isDecimalNumber(value);
      const message = pass
        ? `expected ${printReceived(value)} not to be a number with positive decimal places`
        : `expected ${printReceived(value)} to be a number with positive decimal places`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeDecimalNumber: toBeDecimalNumberMatcher,
  });
});
