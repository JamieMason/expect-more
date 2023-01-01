/// <reference types="jest" />

import { expect } from '@jest/globals';
import { isCalculable } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare module 'expect' {
  interface Matchers<R> {
    /**
     * Assert value can be used in Mathemetic calculations despite not being a `Number`, for example `'1' * '2' === 2` whereas `'wut?' * 2 === NaN`.
     * @example
     * expect('100').toBeCalculable();
     */
    toBeCalculable(): R;
  }
  interface AsymmetricMatchers {
    /**
     * Assert value can be used in Mathemetic calculations despite not being a `Number`, for example `'1' * '2' === 2` whereas `'wut?' * 2 === NaN`.
     * @example
     * expect('100').toEqual(
     *   expect.toBeCalculable()
     * );
     */
    toBeCalculable(): void;
  }
}

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Assert value can be used in Mathemetic calculations despite not being a `Number`, for example `'1' * '2' === 2` whereas `'wut?' * 2 === NaN`.
       * @example
       * expect('100').toBeCalculable();
       */
      toBeCalculable(): R;
    }
    interface Expect {
      /**
       * Assert value can be used in Mathemetic calculations despite not being a `Number`, for example `'1' * '2' === 2` whereas `'wut?' * 2 === NaN`.
       * @example
       * expect('100').toEqual(
       *   expect.toBeCalculable()
       * );
       */
      toBeCalculable<T>(): JestMatchers<T>;
    }
  }
}

export const toBeCalculableMatcher = (value: unknown) =>
  createResult({
    message: () =>
      `expected ${printReceived(value)} to be coercible for use in mathemetical operations`,
    notMessage: () =>
      `expected ${printReceived(value)} not to be coercible for use in mathemetical operations`,
    pass: isCalculable(value),
  });

expect.extend({ toBeCalculable: toBeCalculableMatcher });
