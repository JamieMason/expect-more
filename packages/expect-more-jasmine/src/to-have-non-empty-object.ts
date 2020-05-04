import { isNonEmptyObject } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is an `Object` containing at least one own member.
       * @example
       * expect({ child: { grandchild: { i: 'am not empty' } } }).toHaveNonEmptyObject('child.grandchild');
       */
      toHaveNonEmptyObject(propPath: string): boolean;
    }
  }
}

export const toHaveNonEmptyObjectMatcher = () => {
  return {
    compare(value: any, propPath: string) {
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
