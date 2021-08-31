import { isArrayIncludingOnly } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is an `Array` including only the values provided in the given `allowedValues` array and no others. The order and number of times each value appears in either array does not matter. Returns true unless `value` contains a value which does not feature in `allowedValues`.
       * @example
       * expect({ child: { grandchild: [5, 10, 1] } }).toHaveArrayIncludingOnly('child.grandchild', [1, 5, 10]);
       */
      toHaveArrayIncludingOnly(propPath: string, allowedValues: unknown[]): boolean;
    }
  }
}

export const toHaveArrayIncludingOnlyMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string, allowedValues: unknown[]) {
      const pass = isArrayIncludingOnly(allowedValues, getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(
            propPath,
          )}' not to only include values featured in ${printExpected(allowedValues)} and no others`
        : `expected value at '${printExpected(
            propPath,
          )}' to only include values featured in ${printExpected(allowedValues)} and no others`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveArrayIncludingOnly: toHaveArrayIncludingOnlyMatcher,
  });
});
