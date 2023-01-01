/// <reference types="jest" />

import { expect } from '@jest/globals';
import { isAsyncFunction } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare module 'expect' {
  interface Matchers<R> {
    /**
     * Asserts that a value is a function using `async` and `await` syntax.
     * @example
     * expect(async () => { await fetch('...') }).toBeAsyncFunction();
     */
    toBeAsyncFunction(): R;
  }
  interface AsymmetricMatchers {
    /**
     * Asserts that a value is a function using `async` and `await` syntax.
     * @example
     * expect(async () => { await fetch('...') }).toEqual(
     *   expect.toBeAsyncFunction()
     * );
     */
    toBeAsyncFunction(): void;
  }
}

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is a function using `async` and `await` syntax.
       * @example
       * expect(async () => { await fetch('...') }).toBeAsyncFunction();
       */
      toBeAsyncFunction(): R;
    }
    interface Expect {
      /**
       * Asserts that a value is a function using `async` and `await` syntax.
       * @example
       * expect(async () => { await fetch('...') }).toEqual(
       *   expect.toBeAsyncFunction()
       * );
       */
      toBeAsyncFunction<T>(): JestMatchers<T>;
    }
  }
}

export const toBeAsyncFunctionMatcher = (value: unknown) =>
  createResult({
    message: () => `expected ${printReceived(value)} to be a \`Function\` using async/await syntax`,
    notMessage: () =>
      `expected ${printReceived(value)} not to be a function using async/await syntax`,
    pass: isAsyncFunction(value),
  });

expect.extend({ toBeAsyncFunction: toBeAsyncFunctionMatcher });
