import { isNonEmptyString } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that ${value} is a valid `String` containing at least one character.
       * @example
       * expect({ child: { grandchild: 'i am not empty' } }).toHaveNonEmptyString('child.grandchild');
       */
      toHaveNonEmptyString(propPath: string): boolean;
    }
  }
}

export const toHaveNonEmptyStringMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string) {
      const pass = isNonEmptyString(getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(
            propPath,
          )}' not to be a string with at least one character`
        : `expected value at '${printExpected(
            propPath,
          )}' to be a string with at least one character`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveNonEmptyString: toHaveNonEmptyStringMatcher,
  });
});
