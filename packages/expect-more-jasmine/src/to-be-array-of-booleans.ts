import { isArrayOfBooleans } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is an `Array` containing only `Boolean` values.
       * @example
       * expect([true, false, new Boolean(true)]).toBeArrayOfBooleans();
       */
      toBeArrayOfBooleans(): boolean;
    }
  }
}

export const toBeArrayOfBooleansMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown) {
      const pass = isArrayOfBooleans(value);
      const message = pass
        ? `expected ${printReceived(
            value,
          )} not to be a non-empty array, containing only boolean values`
        : `expected ${printReceived(
            value,
          )} to be a non-empty array, containing only boolean values`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeArrayOfBooleans: toBeArrayOfBooleansMatcher,
  });
});
