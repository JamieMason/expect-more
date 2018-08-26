import { isObject } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that a value is an `Object`.
       * @param other
       * @example
       * expect(onPress).toHaveBeenCalledWith(
       *   expect.objectContaining({
       *     player: expect.toBeObject()
       *   })
       * );
       */
      toBeObject<T>(): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * Asserts that a value is an `Object`.
       * @example
       * expect(player).toBeObject();
       */
      toBeObject(): R;
    }
  }
}

export const toBeObjectMatcher = (received: any) =>
  createResult({
    message: () => `expected ${received} to be an object`,
    notMessage: () => `expected ${received} not to be an object`,
    pass: isObject(received)
  });

expect.extend({ toBeObject: toBeObjectMatcher });
