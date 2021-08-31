import { isEmptyObject } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is a valid `Object` containing no instance members.
       * @example
       * expect({ child: { grandchild: {} } }).toHaveEmptyObject('child.grandchild');
       */
      toHaveEmptyObject(propPath: string): boolean;
    }
  }
}

export const toHaveEmptyObjectMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string) {
      const pass = isEmptyObject(getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(propPath)}' not to be an empty object`
        : `expected value at '${printExpected(propPath)}' to be an empty object`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveEmptyObject: toHaveEmptyObjectMatcher,
  });
});
