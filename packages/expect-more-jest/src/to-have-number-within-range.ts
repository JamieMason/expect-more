import { isWithinRange } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a `Number` which is both greater than or equal to ${floor} and less than or equal to ${ceiling}.
       * @example
       * expect({ child: { grandchild: 7 } }).toHaveNumberWithinRange('child.grandchild', 0, 10);
       */
      toHaveNumberWithinRange(propPath: string, floor: number, ceiling: number): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a `Number` which is both greater than or equal to ${floor} and less than or equal to ${ceiling}.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveNumberWithinRange('child.grandchild', 0, 10));
       */
      toHaveNumberWithinRange<T>(propPath: string, floor: number, ceiling: number): JestMatchers<T>;
    }
  }
}

export const toHaveNumberWithinRangeMatcher = (
  value: any,
  propPath: string,
  floor: number,
  ceiling: number,
) =>
  createResult({
    message: () =>
      `expected value at '${printExpected(
        propPath,
      )}' to be greater than or equal to ${printExpected(
        floor,
      )} and less than or equal to ${printExpected(ceiling)}`,
    notMessage: () =>
      `expected value at '${printExpected(
        propPath,
      )}' not to be greater than or equal to ${printExpected(
        floor,
      )} and less than or equal to ${printExpected(ceiling)}`,
    pass: isWithinRange(floor, ceiling, getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveNumberWithinRange: toHaveNumberWithinRangeMatcher });
