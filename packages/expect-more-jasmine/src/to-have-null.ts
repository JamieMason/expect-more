import { isNull } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is null
       * @example
       * expect({ child: { grandchild: null } }).toHaveNull('child.grandchild');
       */
      toHaveNull(propPath: string): boolean;
    }
  }
}

export const toHaveNullMatcher = () => {
  return {
    compare(value: any, propPath: string) {
      const pass = isNull(getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(propPath)}' not to be is null`
        : `expected value at '${printExpected(propPath)}' to be is null`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveNull: toHaveNullMatcher,
  });
});
