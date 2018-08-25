import { isArrayOfStrings } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      toBeArrayOfStrings<T>(): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * Asserts that a value is an `Array` containing only `String` values.
       * @example
       * expect(player.messages).toBeArrayOfStrings();
       * @example
       * expect(player.messages).toEqual(expect.toBeArrayOfStrings());
       * @example
       * expect(player).toEqual(
       *   expect.objectContaining({
       *     messages: expect.toBeArrayOfStrings()
       *   })
       * );
       * @example
       * expect(onPress).toHaveBeenCalledWith(
       *   expect.objectContaining({
       *     messages: expect.toBeArrayOfStrings()
       *   })
       * );
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
