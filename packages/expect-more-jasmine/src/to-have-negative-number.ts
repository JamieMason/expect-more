import { isNegativeNumber } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is a `Number` less than 0.
       * @example
       * expect({ child: { grandchild: -18 } }).toHaveNegativeNumber('child.grandchild');
       */
      toHaveNegativeNumber(propPath: string): boolean;
    }
  }
}

export const toHaveNegativeNumberMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string) {
      const pass = isNegativeNumber(getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(propPath)}' not to be a negative number`
        : `expected value at '${printExpected(propPath)}' to be a negative number`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveNegativeNumber: toHaveNegativeNumberMatcher,
  });
});
