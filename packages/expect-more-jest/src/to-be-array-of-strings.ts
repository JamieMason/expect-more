import { isArrayOfStrings } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that a value is an `Array` containing only `String` values.
       * @example
       * expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ messages: expect.toBeArrayOfStrings() }));
       */
      toBeArrayOfStrings<T>(): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts that a value is an `Array` containing only `String` values.
       * @example
       * expect(player.messages).toBeArrayOfStrings();
       */
      toBeArrayOfStrings(): R;
    }
  }
}

export const toBeArrayOfStringsMatcher = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a non-empty array, containing only strings`,
    notMessage: () => `expected ${received} not to be a non-empty array, containing only strings`,
    pass: isArrayOfStrings(received)
  });

expect.extend({ toBeArrayOfStrings: toBeArrayOfStringsMatcher });
