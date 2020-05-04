import { endsWith } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is a string whose trailing characters are equal to ${otherString}.
       * @example
       * expect('JavaScript').toEndWith('Script');
       */
      toEndWith(otherString: string): boolean;
    }
  }
}

export const toEndWithMatcher = () => {
  return {
    compare(value: any, otherString: string) {
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
