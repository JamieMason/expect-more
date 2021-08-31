import { isNonEmptyObject } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is an `Object` containing at least one own member.
       * @example
       * expect({ child: { grandchild: { i: 'am not empty' } } }).toHaveNonEmptyObject('child.grandchild');
       */
      toHaveNonEmptyObject(propPath: string): boolean;
    }
  }
}

export const toHaveNonEmptyObjectMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string) {
      const pass = isNonEmptyObject(getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(
            propPath,
          )}' not to be an object with at least one own member`
        : `expected value at '${printExpected(
            propPath,
          )}' to be an object with at least one own member`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveNonEmptyObject: toHaveNonEmptyObjectMatcher,
  });
});
