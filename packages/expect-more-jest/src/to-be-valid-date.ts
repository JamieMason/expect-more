/// <reference types="jest" />

import { expect } from '@jest/globals';
import { isValidDate } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare module 'expect' {
  interface Matchers<R> {
    /**
     * Asserts that a value is an instance of `Date` whose internal value is valid. `Date` is little like `Promise` in that it is a container for a value. For example, `new Date('wut?')` is a valid `Date` which wraps a value that is not valid.
     * @example
     * expect(new Date('2020-01-01')).toBeValidDate();
     */
    toBeValidDate(): R;
  }
  interface AsymmetricMatchers {
    /**
     * Asserts that a value is an instance of `Date` whose internal value is valid. `Date` is little like `Promise` in that it is a container for a value. For example, `new Date('wut?')` is a valid `Date` which wraps a value that is not valid.
     * @example
     * expect(new Date('2020-01-01')).toEqual(
     *   expect.toBeValidDate()
     * );
     */
    toBeValidDate(): void;
  }
}

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is an instance of `Date` whose internal value is valid. `Date` is little like `Promise` in that it is a container for a value. For example, `new Date('wut?')` is a valid `Date` which wraps a value that is not valid.
       * @example
       * expect(new Date('2020-01-01')).toBeValidDate();
       */
      toBeValidDate(): R;
    }
    interface Expect {
      /**
       * Asserts that a value is an instance of `Date` whose internal value is valid. `Date` is little like `Promise` in that it is a container for a value. For example, `new Date('wut?')` is a valid `Date` which wraps a value that is not valid.
       * @example
       * expect(new Date('2020-01-01')).toEqual(
       *   expect.toBeValidDate()
       * );
       */
      toBeValidDate<T>(): JestMatchers<T>;
    }
  }
}

export const toBeValidDateMatcher = (value: unknown) =>
  createResult({
    message: () => `expected ${printReceived(value)} to be an instance of Date with a valid value`,
    notMessage: () =>
      `expected ${printReceived(value)} not to be an instance of Date with a valid value`,
    pass: isValidDate(value),
  });

expect.extend({ toBeValidDate: toBeValidDateMatcher });
