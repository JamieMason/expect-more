import { isNear } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that ${value} is a number within the given acceptable distance from ${otherNumber}.
       * @example
       * expect({ child: { grandchild: 4.8 } }).toHaveNumberNear('child.grandchild', 5, 0.5);
       */
      toHaveNumberNear(propPath: string, otherNumber: number, epsilon: number): boolean;
    }
  }
}

export const toHaveNumberNearMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string, otherNumber: number, epsilon: number) {
      const pass = isNear(otherNumber, epsilon, getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(propPath)}' not to be within ${printExpected(
            epsilon,
          )} greater or less than ${printExpected(otherNumber)}`
        : `expected value at '${printExpected(propPath)}' to be within ${printExpected(
            epsilon,
          )} greater or less than ${printExpected(otherNumber)}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveNumberNear: toHaveNumberNearMatcher,
  });
});
