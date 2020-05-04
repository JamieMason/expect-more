import { isWholeNumber } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is a `Number` with no positive decimal places.
       * @example
       * expect(8).toBeWholeNumber();
       */
      toBeWholeNumber(): boolean;
    }
  }
}

export const toBeWholeNumberMatcher = () => {
  return {
    compare(value: any) {
      const pass = isWholeNumber(value);
      const message = pass
        ? `expected ${printReceived(value)} not to be a whole number`
        : `expected ${printReceived(value)} to be a whole number`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeWholeNumber: toBeWholeNumberMatcher,
  });
});
