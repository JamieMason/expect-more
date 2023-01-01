/// <reference types="jest" />

import { isPositiveNumber } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is a `Number` greater than 0.
       * @example
       * expect(5).toBePositiveNumber();
       */
      toBePositiveNumber(): R;
    }
    interface Expect {
      /**
       * Asserts that a value is a `Number` greater than 0.
       * @example
       * expect(5).toEqual(
       *   expect.toBePositiveNumber()
       * );
       */
      toBePositiveNumber<T>(): JestMatchers<T>;
    }
  }
}

export const toBePositiveNumberMatcher = (value: unknown): jest.CustomMatcherResult =>
  createResult({
    message: () => `expected ${printReceived(value)} to be a positive number`,
    notMessage: () => `expected ${printReceived(value)} not to be a positive number`,
    pass: isPositiveNumber(value),
  });

expect.extend({ toBePositiveNumber: toBePositiveNumberMatcher });
