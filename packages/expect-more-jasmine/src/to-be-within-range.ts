import { isWithinRange } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is a `Number` which is both greater than or equal to ${floor} and less than or equal to ${ceiling}.
       * @example
       * expect(7).toBeWithinRange(0, 10);
       */
      toBeWithinRange(floor: number, ceiling: number): boolean;
    }
  }
}

export const toBeWithinRangeMatcher = () => {
  return {
    compare(value: any, floor: number, ceiling: number) {
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
