import { isArrayIncludingAllOf } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that `value` is an `Array` including all of the values provided in `requiredValues`. It could also include additional values or be in a different order, but if every value in `requiredValues` features in `value` then this will return `true`.
       * @example
       * expect({ child: { grandchild: [12, 0, 14, 'Ivo'] } }).toHaveArrayIncludingAllOf('child.grandchild', ['Ivo', 14]);
       */
      toHaveArrayIncludingAllOf(propPath: string, requiredValues: unknown[]): boolean;
    }
  }
}

export const toHaveArrayIncludingAllOfMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string, requiredValues: unknown[]) {
      const pass = isArrayIncludingAllOf(requiredValues, getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(
            propPath,
          )}' not to include every value provided in ${printExpected(requiredValues)}`
        : `expected value at '${printExpected(
            propPath,
          )}' to include every value provided in ${printExpected(requiredValues)}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveArrayIncludingAllOf: toHaveArrayIncludingAllOfMatcher,
  });
});
