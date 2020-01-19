import { isBoolean } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is `true`, `false`, `new Boolean(true)`, or `new Boolean(false)`.
       * @example
       * expect(false).toBeBoolean();
       */
      toBeBoolean(): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is `true`, `false`, `new Boolean(true)`, or `new Boolean(false)`.
       * @example
       * expect(false).toEqual(
       *   expect.toBeBoolean()
       * );
       */
      toBeBoolean<T>(): JestMatchers<T>;
    }
  }
}

export const toBeBooleanMatcher = (value: any) =>
  createResult({
    message: () => `expected ${value} to be true, false, or an instance of Boolean`,
    notMessage: () => `expected ${value} not to be true, false, or an instance of Boolean`,
    pass: isBoolean(value),
  });

expect.extend({ toBeBoolean: toBeBooleanMatcher });
