import { isNumber } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is a valid `Number` or `new Number()` and not `NaN`.
       * @example
       * expect({ child: { grandchild: 8 } }).toHaveNumber('child.grandchild');
       */
      toHaveNumber(propPath: string): boolean;
    }
  }
}

export const toHaveNumberMatcher = () => {
  return {
    compare(value: any, propPath: string) {
      const pass = isNumber(getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(propPath)}' not to be a valid number`
        : `expected value at '${printExpected(propPath)}' to be a valid number`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveNumber: toHaveNumberMatcher,
  });
});
