/// <reference types="jest" />

import { isWalkable } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that a value is safe to attempt to read property values from.
       * @example
       * expect({}).toBeWalkable();
       */
      toBeWalkable(): R;
    }
    interface Expect {
      /**
       * Asserts that a value is safe to attempt to read property values from.
       * @example
       * expect({}).toEqual(
       *   expect.toBeWalkable()
       * );
       */
      toBeWalkable<T>(): JestMatchers<T>;
    }
  }
}

export const toBeWalkableMatcher = (value: unknown): jest.CustomMatcherResult =>
  createResult({
    message: () => `expected ${printReceived(value)} to be walkable`,
    notMessage: () => `expected ${printReceived(value)} not to be walkable`,
    pass: isWalkable(value),
  });

expect.extend({ toBeWalkable: toBeWalkableMatcher });
