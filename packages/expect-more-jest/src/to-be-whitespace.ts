/// <reference types="jest" />

import { isWhitespace } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is a `String` containing only whitespace characters.
       * @example
       * expect(' ').toBeWhitespace();
       */
      toBeWhitespace(): R;
    }
    interface Expect {
      /**
       * Asserts that a value is a `String` containing only whitespace characters.
       * @example
       * expect(' ').toEqual(
       *   expect.toBeWhitespace()
       * );
       */
      toBeWhitespace<T>(): JestMatchers<T>;
    }
  }
}

export const toBeWhitespaceMatcher = (value: unknown): jest.CustomMatcherResult =>
  createResult({
    message: () =>
      `expected ${printReceived(value)} to be a string containing only whitespace characters`,
    notMessage: () =>
      `expected ${printReceived(value)} not to be a string containing only whitespace characters`,
    pass: isWhitespace(value),
  });

expect.extend({ toBeWhitespace: toBeWhitespaceMatcher });
