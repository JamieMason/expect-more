import { isNull } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is `null`.
       * @example
       * expect({ child: { grandchild: null } }).toHaveNull('child.grandchild');
       */
      toHaveNull(propPath: string): boolean;
    }
  }
}

export const toHaveNullMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string) {
      const pass = isNull(getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(propPath)}' not to be null`
        : `expected value at '${printExpected(propPath)}' to be null`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveNull: toHaveNullMatcher,
  });
});
