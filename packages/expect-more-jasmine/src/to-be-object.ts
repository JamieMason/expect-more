import { isObject } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is an `Object`.
       * @example
       * expect({}).toBeObject();
       */
      toBeObject(): boolean;
    }
  }
}

export const toBeObjectMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown) {
      const pass = isObject(value);
      const message = pass
        ? `expected ${printReceived(value)} not to be an object`
        : `expected ${printReceived(value)} to be an object`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeObject: toBeObjectMatcher,
  });
});
