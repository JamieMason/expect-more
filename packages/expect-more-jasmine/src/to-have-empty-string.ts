import { isEmptyString } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is a valid `String` containing no characters.
       * @example
       * expect({ child: { grandchild: '' } }).toHaveEmptyString('child.grandchild');
       */
      toHaveEmptyString(propPath: string): boolean;
    }
  }
}

export const toHaveEmptyStringMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string) {
      const pass = isEmptyString(getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(
            propPath,
          )}' not to be an empty string or empty instance of String`
        : `expected value at '${printExpected(
            propPath,
          )}' to be an empty string or empty instance of String`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveEmptyString: toHaveEmptyStringMatcher,
  });
});
