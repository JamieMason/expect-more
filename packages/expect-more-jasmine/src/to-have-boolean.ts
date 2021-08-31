import { isBoolean } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is `true`, `false`, `new Boolean(true)`, or `new Boolean(false)`.
       * @example
       * expect({ child: { grandchild: false } }).toHaveBoolean('child.grandchild');
       */
      toHaveBoolean(propPath: string): boolean;
    }
  }
}

export const toHaveBooleanMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string) {
      const pass = isBoolean(getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(
            propPath,
          )}' not to be true, false, or an instance of Boolean`
        : `expected value at '${printExpected(
            propPath,
          )}' to be true, false, or an instance of Boolean`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveBoolean: toHaveBooleanMatcher,
  });
});
