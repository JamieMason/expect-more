import { isCalculable } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Assert value can be used in Mathemetic calculations despite not being a `Number`, for example `'1' * '2' === 2` whereas `'wut?' * 2 === NaN`.
       * @example
       * expect({ child: { grandchild: '100' } }).toHaveCalculable('child.grandchild');
       */
      toHaveCalculable(propPath: string): boolean;
    }
  }
}

export const toHaveCalculableMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string) {
      const pass = isCalculable(getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(
            propPath,
          )}' not to be coercible for use in mathemetical operations`
        : `expected value at '${printExpected(
            propPath,
          )}' to be coercible for use in mathemetical operations`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveCalculable: toHaveCalculableMatcher,
  });
});
