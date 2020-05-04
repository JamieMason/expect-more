import { endsWith } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is a string whose trailing characters are equal to ${otherString}.
       * @example
       * expect({ child: { grandchild: 'JavaScript' } }).toHaveEndingWith('child.grandchild', 'Script');
       */
      toHaveEndingWith(propPath: string, otherString: string): boolean;
    }
  }
}

export const toHaveEndingWithMatcher = () => {
  return {
    compare(value: any, propPath: string, otherString: string) {
      const pass = endsWith(otherString, getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(propPath)}' not to end with ${printExpected(
            otherString,
          )}`
        : `expected value at '${printExpected(propPath)}' to end with ${printExpected(
            otherString,
          )}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveEndingWith: toHaveEndingWithMatcher,
  });
});
