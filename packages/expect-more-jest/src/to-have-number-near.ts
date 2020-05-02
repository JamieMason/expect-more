import { isNear } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a number within the given acceptable distance from ${otherNumber}.
       * @example
       * expect({ child: { grandchild: 4.8 } }).toHaveNumberNear('child.grandchild', 5, 0.5);
       */
      toHaveNumberNear(propPath: string, otherNumber: number, epsilon: number): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a number within the given acceptable distance from ${otherNumber}.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveNumberNear('child.grandchild', 5, 0.5));
       */
      toHaveNumberNear<T>(propPath: string, otherNumber: number, epsilon: number): JestMatchers<T>;
    }
  }
}

export const toHaveNumberNearMatcher = (
  value: any,
  propPath: string,
  otherNumber: number,
  epsilon: number,
) =>
  createResult({
    message: () =>
      `expected value at '${printExpected(propPath)}' to be within ${printExpected(
        epsilon,
      )} greater or less than ${printExpected(otherNumber)}`,
    notMessage: () =>
      `expected value at '${printExpected(propPath)}' not to be within ${printExpected(
        epsilon,
      )} greater or less than ${printExpected(otherNumber)}`,
    pass: isNear(otherNumber, epsilon, getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveNumberNear: toHaveNumberNearMatcher });
