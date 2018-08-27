import { isBoolean } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that a value is a `true`, `false`, `new Boolean(true)`, or `new Boolean(false)`.
       * @param divisor
       * @example
       * expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ isActive: expect.toBeBoolean() }));
       */
      toBeBoolean<T>(): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * Asserts that a value is a `true`, `false`, `new Boolean(true)`, or `new Boolean(false)`.
       * @example
       * expect(player.isActive).toBeBoolean();
       */
      toBeBoolean(): R;
    }
  }
}

export const toBeBooleanMatcher = (received: any) =>
  createResult({
    message: () => `expected ${received} to be true, false, or an instance of Boolean`,
    notMessage: () => `expected ${received} not to be true, false, or an instance of Boolean`,
    pass: isBoolean(received)
  });

expect.extend({ toBeBoolean: toBeBooleanMatcher });
