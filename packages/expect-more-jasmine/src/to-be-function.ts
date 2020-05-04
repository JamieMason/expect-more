import { isFunction } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is a `Function`.
       * @example
       * expect(() => 'i am a function').toBeFunction();
       */
      toBeFunction(): boolean;
    }
  }
}

export const toBeFunctionMatcher = () => {
  return {
    compare(value: any) {
      const pass = isFunction(value);
      const message = pass
        ? `expected ${printReceived(value)} not to be a function or async function`
        : `expected ${printReceived(value)} to be a function or async function`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeFunction: toBeFunctionMatcher,
  });
});
