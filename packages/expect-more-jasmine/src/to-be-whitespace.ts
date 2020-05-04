import { isWhitespace } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is a `String` containing only whitespace characters.
       * @example
       * expect(' ').toBeWhitespace();
       */
      toBeWhitespace(): boolean;
    }
  }
}

export const toBeWhitespaceMatcher = () => {
  return {
    compare(value: any) {
      const pass = isWhitespace(value);
      const message = pass
        ? `expected ${printReceived(
            value,
          )} not to be a string containing only whitespace characters`
        : `expected ${printReceived(value)} to be a string containing only whitespace characters`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeWhitespace: toBeWhitespaceMatcher,
  });
});
