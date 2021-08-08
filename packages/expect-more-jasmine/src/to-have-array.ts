import { isArray } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that ${value} is a valid `Array` containing none or any number of items of any type.
       * @example
       * expect({ child: { grandchild: [2, true, 'string'] } }).toHaveArray('child.grandchild');
       */
      toHaveArray(propPath: string): boolean;
    }
  }
}

export const toHaveArrayMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string) {
      const pass = isArray(getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(propPath)}' not to be an array`
        : `expected value at '${printExpected(propPath)}' to be an array`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveArray: toHaveArrayMatcher,
  });
});
