import { isDecimalNumber } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is a `Number` with positive decimal places.
       * @example
       * expect(12.55).toBeDecimalNumber();
       */
      toBeDecimalNumber(): boolean;
    }
  }
}

export const toBeDecimalNumberMatcher = () => {
  return {
    compare(value: any) {
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
