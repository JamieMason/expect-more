import { isNonEmptyArray } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that a value is an `Array` containing at least 1 value.
       * @example
       * expect(onPress).toHaveBeenCalledWith(
       *   expect.objectContaining({
       *     items: expect.toBeNonEmptyArray()
       *   })
       * );
       */
      toBeNonEmptyArray<T>(): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * Asserts that a value is an `Array` containing at least 1 value.
       * @example
       * expect(basket.items).toBeNonEmptyArray();
       */
      toBeNonEmptyArray(): R;
    }
  }
}

export const toBeNonEmptyArrayMatcher = (received: any) =>
  createResult({
    message: () => `expected ${received} to be an array with at least one item`,
    notMessage: () => `expected ${received} not to be an array with at least one item`,
    pass: isNonEmptyArray(received)
  });

expect.extend({ toBeNonEmptyArray: toBeNonEmptyArrayMatcher });
