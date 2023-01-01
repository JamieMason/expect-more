/// <reference types="jest" />

import { expect } from '@jest/globals';
import { isString } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare module 'expect' {
  interface Matchers<R> {
    /**
     * Asserts that a value is a `String` or `new String()`.
     * @example
     * expect('i am a string').toBeString();
     */
    toBeString(): R;
  }
  interface AsymmetricMatchers {
    /**
     * Asserts that a value is a `String` or `new String()`.
     * @example
     * expect('i am a string').toEqual(
     *   expect.toBeString()
     * );
     */
    toBeString(): void;
  }
}

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is a `String` or `new String()`.
       * @example
       * expect('i am a string').toBeString();
       */
      toBeString(): R;
    }
    interface Expect {
      /**
       * Asserts that a value is a `String` or `new String()`.
       * @example
       * expect('i am a string').toEqual(
       *   expect.toBeString()
       * );
       */
      toBeString<T>(): JestMatchers<T>;
    }
  }
}

export const toBeStringMatcher = (value: unknown) =>
  createResult({
    message: () => `expected ${printReceived(value)} to be a string`,
    notMessage: () => `expected ${printReceived(value)} not to be a string`,
    pass: isString(value),
  });

expect.extend({ toBeString: toBeStringMatcher });
