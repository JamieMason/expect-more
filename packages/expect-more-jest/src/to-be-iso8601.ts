/// <reference types="jest" />

import { isIso8601 } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is a String which conforms to common use-cases of the ISO 8601 standard representation of dates and times.
       * @example
       * expect('1999-12-31T23:59:59').toBeIso8601();
       */
      toBeIso8601(): R;
    }
    interface Expect {
      /**
       * Asserts that a value is a String which conforms to common use-cases of the ISO 8601 standard representation of dates and times.
       * @example
       * expect('1999-12-31T23:59:59').toEqual(
       *   expect.toBeIso8601()
       * );
       */
      toBeIso8601<T>(): JestMatchers<T>;
    }
  }
}

export const toBeIso8601Matcher = (value: unknown): jest.CustomMatcherResult =>
  createResult({
    message: () => `expected ${printReceived(value)} to be a valid ISO 8601 date string`,
    notMessage: () => `expected ${printReceived(value)} not to be a valid ISO 8601 date string`,
    pass: isIso8601(value),
  });

expect.extend({ toBeIso8601: toBeIso8601Matcher });
