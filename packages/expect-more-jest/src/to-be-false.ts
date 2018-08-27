import { isFalse } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that a value is a `false` or `new Boolean(false)`.
       * @example
       * expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ isActive: expect.toBeFalse() }));
       */
      toBeFalse<T>(): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * Asserts that a value is a `false` or `new Boolean(false)`.
       * @example
       * expect(player.isActive).toBeFalse();
       */
      toBeFalse(): R;
    }
  }
}

export const toBeFalseMatcher = (received: any) =>
  createResult({
    message: () => `expected ${received} to be false or Boolean(false)`,
    notMessage: () => `expected ${received} not to be false or Boolean(false)`,
    pass: isFalse(received)
  });

expect.extend({ toBeFalse: toBeFalseMatcher });
