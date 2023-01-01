/// <reference types="jest" />

import { expect } from '@jest/globals';
import { isJsonString } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare module 'expect' {
  interface Matchers<R> {
    /**
     * Asserts that a value is a `String` of valid JSON.
     * @example
     * expect('{"i":"am valid JSON"}').toBeJsonString();
     */
    toBeJsonString(): R;
  }
  interface AsymmetricMatchers {
    /**
     * Asserts that a value is a `String` of valid JSON.
     * @example
     * expect('{"i":"am valid JSON"}').toEqual(
     *   expect.toBeJsonString()
     * );
     */
    toBeJsonString(): void;
  }
}

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is a `String` of valid JSON.
       * @example
       * expect('{"i":"am valid JSON"}').toBeJsonString();
       */
      toBeJsonString(): R;
    }
    interface Expect {
      /**
       * Asserts that a value is a `String` of valid JSON.
       * @example
       * expect('{"i":"am valid JSON"}').toEqual(
       *   expect.toBeJsonString()
       * );
       */
      toBeJsonString<T>(): JestMatchers<T>;
    }
  }
}

export const toBeJsonStringMatcher = (value: unknown) =>
  createResult({
    message: () => `expected ${printReceived(value)} to be a string of valid JSON`,
    notMessage: () => `expected ${printReceived(value)} not to be a string of valid JSON`,
    pass: isJsonString(value),
  });

expect.extend({ toBeJsonString: toBeJsonStringMatcher });
