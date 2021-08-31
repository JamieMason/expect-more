import { isWholeNumber } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is a `Number` with no positive decimal places.
       * @example
       * expect({ child: { grandchild: 8 } }).toHaveWholeNumber('child.grandchild');
       */
      toHaveWholeNumber(propPath: string): boolean;
    }
  }
}

export const toHaveWholeNumberMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string) {
      const pass = isWholeNumber(getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(propPath)}' not to be a whole number`
        : `expected value at '${printExpected(propPath)}' to be a whole number`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveWholeNumber: toHaveWholeNumberMatcher,
  });
});
