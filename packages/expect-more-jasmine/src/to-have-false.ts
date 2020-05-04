import { isFalse } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is `false` or `new Boolean(false)`.
       * @example
       * expect({ child: { grandchild: false } }).toHaveFalse('child.grandchild');
       */
      toHaveFalse(propPath: string): boolean;
    }
  }
}

export const toHaveFalseMatcher = () => {
  return {
    compare(value: any, propPath: string) {
      const pass = isFalse(getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(propPath)}' not to be false or Boolean(false)`
        : `expected value at '${printExpected(propPath)}' to be false or Boolean(false)`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveFalse: toHaveFalseMatcher,
  });
});
