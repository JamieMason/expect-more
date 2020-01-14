import { isArray } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that a value is a valid `Array` containing none or any number of items of any type.
       * @example
       * expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ messages: expect.toBeArray() }));
       */
      toBeArray<T>(): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts that a value is a valid `Array` containing none or any number of items of any type.
       * @example
       * expect(player.messages).toBeArray();
       */
      toBeArray(): R;
    }
  }
}

export const toBeArrayMatcher = (received: any) =>
  createResult({
    message: () => `expected ${received} to be an array`,
    notMessage: () => `expected ${received} not to be an array`,
    pass: isArray(received),
  });

expect.extend({ toBeArray: toBeArrayMatcher });
