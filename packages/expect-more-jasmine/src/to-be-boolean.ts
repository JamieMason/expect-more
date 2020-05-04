import { isBoolean } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is `true`, `false`, `new Boolean(true)`, or `new Boolean(false)`.
       * @example
       * expect(false).toBeBoolean();
       */
      toBeBoolean(): boolean;
    }
  }
}

export const toBeBooleanMatcher = () => {
  return {
    compare(value: any) {
      const pass = isBoolean(value);
      const message = pass
        ? `expected ${printReceived(value)} not to be true, false, or an instance of Boolean`
        : `expected ${printReceived(value)} to be true, false, or an instance of Boolean`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeBoolean: toBeBooleanMatcher,
  });
});
