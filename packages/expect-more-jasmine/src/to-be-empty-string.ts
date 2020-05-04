import { isEmptyString } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is a valid `String` containing no characters.
       * @example
       * expect('').toBeEmptyString();
       */
      toBeEmptyString(): boolean;
    }
  }
}

export const toBeEmptyStringMatcher = () => {
  return {
    compare(value: any) {
      const pass = isEmptyString(value);
      const message = pass
        ? `expected ${printReceived(value)} not to be an empty string or empty instance of String`
        : `expected ${printReceived(value)} to be an empty string or empty instance of String`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeEmptyString: toBeEmptyStringMatcher,
  });
});
