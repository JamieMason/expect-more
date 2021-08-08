import { isUndefined } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that ${value} is undefined
       * @example
       * expect({ child: { grandchild: undefined } }).toHaveUndefined('child.grandchild');
       */
      toHaveUndefined(propPath: string): boolean;
    }
  }
}

export const toHaveUndefinedMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string) {
      const pass = isUndefined(getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(propPath)}' not to be undefined`
        : `expected value at '${printExpected(propPath)}' to be undefined`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveUndefined: toHaveUndefinedMatcher,
  });
});
