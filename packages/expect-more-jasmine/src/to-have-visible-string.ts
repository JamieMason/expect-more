import { isVisibleString } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is a valid `String` containing at least one character which is not whitespace.
       * @example
       * expect({ child: { grandchild: 'i am visible' } }).toHaveVisibleString('child.grandchild');
       */
      toHaveVisibleString(propPath: string): boolean;
    }
  }
}

export const toHaveVisibleStringMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string) {
      const pass = isVisibleString(getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(
            propPath,
          )}' not to be a string with at least one non-whitespace character`
        : `expected value at '${printExpected(
            propPath,
          )}' to be a string with at least one non-whitespace character`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveVisibleString: toHaveVisibleStringMatcher,
  });
});
