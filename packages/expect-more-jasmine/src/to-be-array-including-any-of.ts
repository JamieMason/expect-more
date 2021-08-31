import { isArrayIncludingAnyOf } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that `value` is an `Array` including at least one of the members of `values`.
       * @example
       * expect([12, 0, 14, 'Ginola']).toBeArrayIncludingAnyOf(['Ginola', 3]);
       */
      toBeArrayIncludingAnyOf(values: unknown[]): boolean;
    }
  }
}

export const toBeArrayIncludingAnyOfMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, values: unknown[]) {
      const pass = isArrayIncludingAnyOf(values, value);
      const message = pass
        ? `expected ${printReceived(
            value,
          )} not to include at least one of the values in ${printExpected(values)}`
        : `expected ${printReceived(
            value,
          )} to include at least one of the values in ${printExpected(values)}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeArrayIncludingAnyOf: toBeArrayIncludingAnyOfMatcher,
  });
});
