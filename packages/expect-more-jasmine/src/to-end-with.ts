import { endsWith } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that value is a string whose trailing characters are equal to those of the provided string.
       * @example
       * expect('JavaScript').toEndWith('Script');
       */
      toEndWith(otherString: unknown): boolean;
    }
  }
}

export const toEndWithMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, otherString: unknown) {
      const pass = endsWith(otherString, value);
      const message = pass
        ? `expected ${printReceived(value)} not to end with ${printExpected(otherString)}`
        : `expected ${printReceived(value)} to end with ${printExpected(otherString)}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toEndWith: toEndWithMatcher,
  });
});
