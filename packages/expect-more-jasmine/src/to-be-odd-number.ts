import { isOddNumber } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is an odd `Number`.
       * @example
       * expect(5).toBeOddNumber();
       */
      toBeOddNumber(): boolean;
    }
  }
}

export const toBeOddNumberMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown) {
      const pass = isOddNumber(value);
      const message = pass
        ? `expected ${printReceived(value)} not to be an odd number`
        : `expected ${printReceived(value)} to be an odd number`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeOddNumber: toBeOddNumberMatcher,
  });
});
