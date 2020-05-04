import { isEmptyObject } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is a valid `Object` containing no instance members.
       * @example
       * expect({ child: { grandchild: {} } }).toHaveEmptyObject('child.grandchild');
       */
      toHaveEmptyObject(propPath: string): boolean;
    }
  }
}

export const toHaveEmptyObjectMatcher = () => {
  return {
    compare(value: any, propPath: string) {
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
