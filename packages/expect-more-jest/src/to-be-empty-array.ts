import { isEmptyArray } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that a value is a valid `Array` containing no items.
       * @example
       * expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ messages: expect.toBeEmptyArray() }));
       */
      toBeEmptyArray<T>(): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts that a value is a valid `Array` containing no items.
       * @example
       * expect(player.messages).toBeEmptyArray();
       */
      toBeEmptyArray(): R;
    }
  }
}

export const toBeEmptyArrayMatcher = (received: any) =>
  createResult({
    message: () => `expected ${received} to be an array without any items`,
    notMessage: () => `expected ${received} not to be an array without any items`,
    pass: isEmptyArray(received),
  });

expect.extend({ toBeEmptyArray: toBeEmptyArrayMatcher });
