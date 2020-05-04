import { isObject } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is an `Object`.
       * @example
       * expect({}).toBeObject();
       */
      toBeObject(): boolean;
    }
  }
}

export const toBeObjectMatcher = () => {
  return {
    compare(value: any) {
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
