import { isNil } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is `null` or `undefined`
       * @example
       * expect(undefined).toBeNil();
       */
      toBeNil(): boolean;
    }
  }
}

export const toBeNilMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown) {
      const pass = isNil(value);
      const message = pass
        ? `expected ${printReceived(value)} not to be null or undefined`
        : `expected ${printReceived(value)} to be null or undefined`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeNil: toBeNilMatcher,
  });
});
