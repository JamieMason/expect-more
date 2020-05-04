import { isObject } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is an `Object`.
       * @example
       * expect({ child: { grandchild: {} } }).toHaveObject('child.grandchild');
       */
      toHaveObject(propPath: string): boolean;
    }
  }
}

export const toHaveObjectMatcher = () => {
  return {
    compare(value: any, propPath: string) {
      const pass = isObject(getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(propPath)}' not to be an object`
        : `expected value at '${printExpected(propPath)}' to be an object`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveObject: toHaveObjectMatcher,
  });
});
