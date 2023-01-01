/// <reference types="jasmine" />

import { isAsyncFunction } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is a function using `async` and `await` syntax.
       * @example
       * expect(async () => { await fetch('...') }).toBeAsyncFunction();
       */
      toBeAsyncFunction(): boolean;
    }
  }
}

export const toBeAsyncFunctionMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown) {
      const pass = isAsyncFunction(value);
      const message = pass
        ? `expected ${printReceived(value)} not to be a function using async/await syntax`
        : `expected ${printReceived(value)} to be a \`Function\` using async/await syntax`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeAsyncFunction: toBeAsyncFunctionMatcher,
  });
});
