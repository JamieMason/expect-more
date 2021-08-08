import { isString } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that ${value} is a `String` or `new String()`.
       * @example
       * expect('i am a string').toBeString();
       */
      toBeString(): boolean;
    }
  }
}

export const toBeStringMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown) {
      const pass = isString(value);
      const message = pass
        ? `expected ${printReceived(value)} not to be a string`
        : `expected ${printReceived(value)} to be a string`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeString: toBeStringMatcher,
  });
});
