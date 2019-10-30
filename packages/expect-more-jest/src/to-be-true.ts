import { isTrue } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that a value is a `true` or `new Boolean(true)`.
       * @param other
       * @example
       * expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ isActive: expect.toBeTrue() }));
       */
      toBeTrue<T>(): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts that a value is a `true` or `new Boolean(true)`.
       * @example
       * expect(player.isActive).toBeTrue();
       */
      toBeTrue(): R;
    }
  }
}

export const toBeTrueMatcher = (received: any) =>
  createResult({
    message: () => `expected ${received} to be true or Boolean(true)`,
    notMessage: () => `expected ${received} not to be true or Boolean(true)`,
    pass: isTrue(received)
  });

expect.extend({ toBeTrue: toBeTrueMatcher });
