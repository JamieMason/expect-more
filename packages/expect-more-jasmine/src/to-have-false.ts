import { isFalse } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

export const toHaveFalseMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string) {
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
