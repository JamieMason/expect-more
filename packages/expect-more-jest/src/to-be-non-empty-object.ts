/// <reference types="jest" />

import { isNonEmptyObject } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is an `Object` containing at least one own member.
       * @example
       * expect({ i: 'am not empty' }).toBeNonEmptyObject();
       */
      toBeNonEmptyObject(): R;
    }
    interface Expect {
      /**
       * Asserts that a value is an `Object` containing at least one own member.
       * @example
       * expect({ i: 'am not empty' }).toEqual(
       *   expect.toBeNonEmptyObject()
       * );
       */
      toBeNonEmptyObject<T>(): JestMatchers<T>;
    }
  }
}

export const toBeNonEmptyObjectMatcher = (value: unknown): jest.CustomMatcherResult =>
  createResult({
    message: () => `expected ${printReceived(value)} to be an object with at least one own member`,
    notMessage: () =>
      `expected ${printReceived(value)} not to be an object with at least one own member`,
    pass: isNonEmptyObject(value),
  });

expect.extend({ toBeNonEmptyObject: toBeNonEmptyObjectMatcher });
