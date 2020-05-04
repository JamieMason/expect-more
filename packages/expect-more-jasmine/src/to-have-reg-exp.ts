import { isRegExp } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is a `RegExp`.
       * @example
       * expect({ child: { grandchild: new RegExp('i am a regular expression') } }).toHaveRegExp('child.grandchild');
       */
      toHaveRegExp(propPath: string): boolean;
    }
  }
}

export const toHaveRegExpMatcher = () => {
  return {
    compare(value: any, propPath: string) {
      const pass = isRegExp(getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(propPath)}' not to be a regular expression`
        : `expected value at '${printExpected(propPath)}' to be a regular expression`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveRegExp: toHaveRegExpMatcher,
  });
});
