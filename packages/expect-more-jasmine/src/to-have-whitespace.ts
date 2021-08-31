import { isWhitespace } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is a `String` containing only whitespace characters.
       * @example
       * expect({ child: { grandchild: ' ' } }).toHaveWhitespace('child.grandchild');
       */
      toHaveWhitespace(propPath: string): boolean;
    }
  }
}

export const toHaveWhitespaceMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string) {
      const pass = isWhitespace(getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(
            propPath,
          )}' not to be a string containing only whitespace characters`
        : `expected value at '${printExpected(
            propPath,
          )}' to be a string containing only whitespace characters`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveWhitespace: toHaveWhitespaceMatcher,
  });
});
