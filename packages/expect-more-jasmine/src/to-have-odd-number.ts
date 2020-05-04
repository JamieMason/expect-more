import { isOddNumber } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is an odd `Number`.
       * @example
       * expect({ child: { grandchild: 5 } }).toHaveOddNumber('child.grandchild');
       */
      toHaveOddNumber(propPath: string): boolean;
    }
  }
}

export const toHaveOddNumberMatcher = () => {
  return {
    compare(value: any, propPath: string) {
      const pass = isOddNumber(getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(propPath)}' not to be an odd number`
        : `expected value at '${printExpected(propPath)}' to be an odd number`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveOddNumber: toHaveOddNumberMatcher,
  });
});
