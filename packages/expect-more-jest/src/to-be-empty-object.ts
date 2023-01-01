/// <reference types="jest" />

import { expect } from '@jest/globals';
import { isEmptyObject } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare module 'expect' {
  interface Matchers<R> {
    /**
     * Asserts that a value is a valid `Object` containing no instance members.
     * @example
     * expect({}).toBeEmptyObject();
     */
    toBeEmptyObject(): R;
  }
  interface AsymmetricMatchers {
    /**
     * Asserts that a value is a valid `Object` containing no instance members.
     * @example
     * expect({}).toEqual(
     *   expect.toBeEmptyObject()
     * );
     */
    toBeEmptyObject(): void;
  }
}

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is a valid `Object` containing no instance members.
       * @example
       * expect({}).toBeEmptyObject();
       */
      toBeEmptyObject(): R;
    }
    interface Expect {
      /**
       * Asserts that a value is a valid `Object` containing no instance members.
       * @example
       * expect({}).toEqual(
       *   expect.toBeEmptyObject()
       * );
       */
      toBeEmptyObject<T>(): JestMatchers<T>;
    }
  }
}

export const toBeEmptyObjectMatcher = (value: unknown) =>
  createResult({
    message: () => `expected ${printReceived(value)} to be an empty object`,
    notMessage: () => `expected ${printReceived(value)} not to be an empty object`,
    pass: isEmptyObject(value),
  });

expect.extend({ toBeEmptyObject: toBeEmptyObjectMatcher });
