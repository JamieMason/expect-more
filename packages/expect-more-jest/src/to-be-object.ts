/// <reference types="jest" />

import { expect } from '@jest/globals';
import { isObject } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare module 'expect' {
  interface Matchers<R> {
    /**
     * Asserts that a value is an `Object`.
     * @example
     * expect({}).toBeObject();
     */
    toBeObject(): R;
  }
  interface AsymmetricMatchers {
    /**
     * Asserts that a value is an `Object`.
     * @example
     * expect({}).toEqual(
     *   expect.toBeObject()
     * );
     */
    toBeObject(): void;
  }
}

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is an `Object`.
       * @example
       * expect({}).toBeObject();
       */
      toBeObject(): R;
    }
    interface Expect {
      /**
       * Asserts that a value is an `Object`.
       * @example
       * expect({}).toEqual(
       *   expect.toBeObject()
       * );
       */
      toBeObject<T>(): JestMatchers<T>;
    }
  }
}

export const toBeObjectMatcher = (value: unknown) =>
  createResult({
    message: () => `expected ${printReceived(value)} to be an object`,
    notMessage: () => `expected ${printReceived(value)} not to be an object`,
    pass: isObject(value),
  });

expect.extend({ toBeObject: toBeObjectMatcher });
