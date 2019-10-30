import { isArrayOfBooleans } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that a value is an `Array` containing only `Boolean` values.
       * @example
       * expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ attempts: expect.toBeArrayOfBooleans() }));
       */
      toBeArrayOfBooleans<T>(): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts that a value is an `Array` containing only `Boolean` values.
       * @example
       * expect(player.attempts).toBeArrayOfBooleans();
       */
      toBeArrayOfBooleans(): R;
    }
  }
}

export const toBeArrayOfBooleansMatcher = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a non-empty array, containing only boolean values`,
    notMessage: () => `expected ${received} not to be a non-empty array, containing only boolean values`,
    pass: isArrayOfBooleans(received)
  });

expect.extend({ toBeArrayOfBooleans: toBeArrayOfBooleansMatcher });
