import { isWithinRange } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is a `Number` which is both greater than or equal to ${floor} and less than or equal to ${ceiling}.
       * @example
       * expect({ child: { grandchild: 7 } }).toHaveNumberWithinRange('child.grandchild', 0, 10);
       */
      toHaveNumberWithinRange(propPath: string, floor: number, ceiling: number): boolean;
    }
  }
}

export const toHaveNumberWithinRangeMatcher = () => {
  return {
    compare(value: any, propPath: string, floor: number, ceiling: number) {
      const pass = isWithinRange(floor, ceiling, getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(
            propPath,
          )}' not to be greater than or equal to ${printExpected(
            floor,
          )} and less than or equal to ${printExpected(ceiling)}`
        : `expected value at '${printExpected(
            propPath,
          )}' to be greater than or equal to ${printExpected(
            floor,
          )} and less than or equal to ${printExpected(ceiling)}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveNumberWithinRange: toHaveNumberWithinRangeMatcher,
  });
});
