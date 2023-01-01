/// <reference types="jasmine" />

import { isWithinRange } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is a `Number` which is both greater than or equal to `floor` and less than or equal to `ceiling`.
       * @example
       * expect(7).toBeWithinRange(0, 10);
       */
      toBeWithinRange(floor: number, ceiling: number): boolean;
    }
  }
}

export const toBeWithinRangeMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, floor: number, ceiling: number) {
      const pass = isWithinRange(floor, ceiling, value);
      const message = pass
        ? `expected ${printReceived(value)} not to be greater than or equal to ${printExpected(
            floor,
          )} and less than or equal to ${printExpected(ceiling)}`
        : `expected ${printReceived(value)} to be greater than or equal to ${printExpected(
            floor,
          )} and less than or equal to ${printExpected(ceiling)}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeWithinRange: toBeWithinRangeMatcher,
  });
});
