import { isGreaterThanOrEqualTo } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is greater than or equal to ${otherNumber}.
       * @example
       * expect({ child: { grandchild: 10 } }).toHaveGreaterThanOrEqualTo('child.grandchild', 5);
       */
      toHaveGreaterThanOrEqualTo(propPath: string, otherNumber: number): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is greater than or equal to ${otherNumber}.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveGreaterThanOrEqualTo('child.grandchild', 5));
       */
      toHaveGreaterThanOrEqualTo<T>(propPath: string, otherNumber: number): JestMatchers<T>;
    }
  }
}

export const toHaveGreaterThanOrEqualToMatcher = (
  value: any,
  propPath: string,
  otherNumber: number,
) =>
  createResult({
    message: () =>
      `expected value at '${printExpected(
        propPath,
      )}' to be greater than or equal to ${printExpected(otherNumber)}`,
    notMessage: () =>
      `expected value at '${printExpected(
        propPath,
      )}' not to be greater than or equal to ${printExpected(otherNumber)}`,
    pass: isGreaterThanOrEqualTo(otherNumber, getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveGreaterThanOrEqualTo: toHaveGreaterThanOrEqualToMatcher });
