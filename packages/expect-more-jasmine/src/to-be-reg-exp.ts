import { isRegExp } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is a `RegExp`.
       * @example
       * expect(new RegExp('i am a regular expression')).toBeRegExp();
       */
      toBeRegExp(): boolean;
    }
  }
}

export const toBeRegExpMatcher = () => {
  return {
    compare(value: any) {
      const pass = isRegExp(value);
      const message = pass
        ? `expected ${printReceived(value)} not to be a regular expression`
        : `expected ${printReceived(value)} to be a regular expression`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeRegExp: toBeRegExpMatcher,
  });
});
