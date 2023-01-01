/// <reference types="jest" />

import { isFunction } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is a `Function`.
       * @example
       * expect(() => 'i am a function').toBeFunction();
       */
      toBeFunction(): R;
    }
    interface Expect {
      /**
       * Asserts that a value is a `Function`.
       * @example
       * expect(() => 'i am a function').toEqual(
       *   expect.toBeFunction()
       * );
       */
      toBeFunction<T>(): JestMatchers<T>;
    }
  }
}

export const toBeFunctionMatcher = (value: unknown): jest.CustomMatcherResult =>
  createResult({
    message: () => `expected ${printReceived(value)} to be a function or async function`,
    notMessage: () => `expected ${printReceived(value)} not to be a function or async function`,
    pass: isFunction(value),
  });

expect.extend({ toBeFunction: toBeFunctionMatcher });
