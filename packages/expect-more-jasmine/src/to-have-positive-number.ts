import { isPositiveNumber } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is a `Number` greater than 0.
       * @example
       * expect({ child: { grandchild: 5 } }).toHavePositiveNumber('child.grandchild');
       */
      toHavePositiveNumber(propPath: string): boolean;
    }
  }
}

export const toHavePositiveNumberMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string) {
      const pass = isPositiveNumber(getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(propPath)}' not to be a positive number`
        : `expected value at '${printExpected(propPath)}' to be a positive number`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHavePositiveNumber: toHavePositiveNumberMatcher,
  });
});
