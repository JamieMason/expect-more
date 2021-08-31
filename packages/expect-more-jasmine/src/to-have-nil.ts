import { isNil } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is `null` or `undefined`
       * @example
       * expect({ child: { grandchild: undefined } }).toHaveNil('child.grandchild');
       */
      toHaveNil(propPath: string): boolean;
    }
  }
}

export const toHaveNilMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string) {
      const pass = isNil(getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(propPath)}' not to be null or undefined`
        : `expected value at '${printExpected(propPath)}' to be null or undefined`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveNil: toHaveNilMatcher,
  });
});
