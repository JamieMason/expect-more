import { startsWith } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that value is a string whose trailing characters are equal to those of the provided string.
       * @example
       * expect({ child: { grandchild: 'JavaScript' } }).toHaveStartingWith('child.grandchild', 'Java');
       */
      toHaveStartingWith(propPath: string, otherString: string): boolean;
    }
  }
}

export const toHaveStartingWithMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string, otherString: string) {
      const pass = startsWith(otherString, getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(propPath)}' not to start with ${printExpected(
            otherString,
          )}`
        : `expected value at '${printExpected(propPath)}' to start with ${printExpected(
            otherString,
          )}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveStartingWith: toHaveStartingWithMatcher,
  });
});
