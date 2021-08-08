import { isWhitespace } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

export const toBeWhitespaceMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown) {
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
