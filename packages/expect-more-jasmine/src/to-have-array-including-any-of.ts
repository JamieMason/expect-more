import { isArrayIncludingAnyOf } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that `value` is an `Array` including at least one of the members of `allowedValues`.
       * @example
       * expect({ child: { grandchild: [12, 0, 14, 'Ginola'] } }).toHaveArrayIncludingAnyOf('child.grandchild', ['Ginola', 3]);
       */
      toHaveArrayIncludingAnyOf(propPath: string, allowedValues: unknown[]): boolean;
    }
  }
}

export const toHaveArrayIncludingAnyOfMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string, allowedValues: unknown[]) {
      const pass = isArrayIncludingAnyOf(allowedValues, getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(
            propPath,
          )}' not to include at least one of the values in ${printExpected(allowedValues)}`
        : `expected value at '${printExpected(
            propPath,
          )}' to include at least one of the values in ${printExpected(allowedValues)}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveArrayIncludingAnyOf: toHaveArrayIncludingAnyOfMatcher,
  });
});
