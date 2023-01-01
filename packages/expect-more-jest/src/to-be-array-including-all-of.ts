/// <reference types="jest" />

import { expect } from '@jest/globals';
import { isArrayIncludingAllOf } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare module 'expect' {
  interface Matchers<R> {
    /**
     * Asserts that `value` is an `Array` including all of the values provided in `requiredValues`. It could also include additional values or be in a different order, but if every value in `requiredValues` features in `value` then this will return `true`.
     * @example
     * expect([12, 0, 14, 'Ivo']).toBeArrayIncludingAllOf(['Ivo', 14]);
     */
    toBeArrayIncludingAllOf(requiredValues: unknown[]): R;
  }
  interface AsymmetricMatchers {
    /**
     * Asserts that `value` is an `Array` including all of the values provided in `requiredValues`. It could also include additional values or be in a different order, but if every value in `requiredValues` features in `value` then this will return `true`.
     * @example
     * expect([12, 0, 14, 'Ivo']).toEqual(
     *   expect.toBeArrayIncludingAllOf(['Ivo', 14])
     * );
     */
    toBeArrayIncludingAllOf(requiredValues: unknown[]): void;
  }
}

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that `value` is an `Array` including all of the values provided in `requiredValues`. It could also include additional values or be in a different order, but if every value in `requiredValues` features in `value` then this will return `true`.
       * @example
       * expect([12, 0, 14, 'Ivo']).toBeArrayIncludingAllOf(['Ivo', 14]);
       */
      toBeArrayIncludingAllOf(requiredValues: unknown[]): R;
    }
    interface Expect {
      /**
       * Asserts that `value` is an `Array` including all of the values provided in `requiredValues`. It could also include additional values or be in a different order, but if every value in `requiredValues` features in `value` then this will return `true`.
       * @example
       * expect([12, 0, 14, 'Ivo']).toEqual(
       *   expect.toBeArrayIncludingAllOf(['Ivo', 14])
       * );
       */
      toBeArrayIncludingAllOf<T>(requiredValues: unknown[]): JestMatchers<T>;
    }
  }
}

export const toBeArrayIncludingAllOfMatcher = (value: unknown, requiredValues: unknown[]) =>
  createResult({
    message: () =>
      `expected ${printReceived(value)} to include every value provided in ${printExpected(
        requiredValues,
      )}`,
    notMessage: () =>
      `expected ${printReceived(value)} not to include every value provided in ${printExpected(
        requiredValues,
      )}`,
    pass: isArrayIncludingAllOf(requiredValues, value),
  });

expect.extend({ toBeArrayIncludingAllOf: toBeArrayIncludingAllOfMatcher });
