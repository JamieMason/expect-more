import { isArrayIncludingOnly } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is an `Array` including only the values provided in the given `allowedValues` array and no others. The order and number of times each value appears in either array does not matter. Returns true unless `value` contains a value which does not feature in `allowedValues`.
       * @example
       * expect([5, 10, 1]).toBeArrayIncludingOnly([1, 5, 10]);
       */
      toBeArrayIncludingOnly(allowedValues: unknown[]): boolean;
    }
  }
}

export const toBeArrayIncludingOnlyMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, allowedValues: unknown[]) {
      const pass = isArrayIncludingOnly(allowedValues, value);
      const message = pass
        ? `expected ${printReceived(value)} not to only include values featured in ${printExpected(
            allowedValues,
          )} and no others`
        : `expected ${printReceived(value)} to only include values featured in ${printExpected(
            allowedValues,
          )} and no others`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeArrayIncludingOnly: toBeArrayIncludingOnlyMatcher,
  });
});
