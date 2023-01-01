/// <reference types="jasmine" />

import { isArrayIncludingAllOf } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that `value` is an `Array` including all of the values provided in `requiredValues`. It could also include additional values or be in a different order, but if every value in `requiredValues` features in `value` then this will return `true`.
       * @example
       * expect([12, 0, 14, 'Ivo']).toBeArrayIncludingAllOf(['Ivo', 14]);
       */
      toBeArrayIncludingAllOf(requiredValues: unknown[]): boolean;
    }
  }
}

export const toBeArrayIncludingAllOfMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, requiredValues: unknown[]) {
      const pass = isArrayIncludingAllOf(requiredValues, value);
      const message = pass
        ? `expected ${printReceived(value)} not to include every value provided in ${printExpected(
            requiredValues,
          )}`
        : `expected ${printReceived(value)} to include every value provided in ${printExpected(
            requiredValues,
          )}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeArrayIncludingAllOf: toBeArrayIncludingAllOfMatcher,
  });
});
