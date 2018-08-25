import { isArrayOfSize } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      toBeArrayOfSize<T>(size: number): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * Asserts that a value is an `Array` containing `size` number of values.
       * @param size
       * @example
       * expect(cat.paws).toBeArrayOfSize(4);
       * @example
       * expect(cat.paws).toEqual(expect.toBeArrayOfSize(4));
       * @example
       * expect(cat).toEqual(
       *   expect.objectContaining({
       *     paws: expect.toBeArrayOfSize(4)
       *   })
       * );
       * @example
       * expect(onPress).toHaveBeenCalledWith(
       *   expect.objectContaining({
       *     paws: expect.toBeArrayOfSize(4)
       *   })
       * );
       */
      toBeArrayOfSize(size: number): R;
    }
  }
}

export const toBeArrayOfSizeMatcher = (received: any, size: number) =>
  createResult({
    message: () => `expected ${received} to be an array containing exactly ${size} items`,
    notMessage: () => `expected ${received} not to be an array containing exactly ${size} items`,
    pass: isArrayOfSize(size, received)
  });

expect.extend({ toBeArrayOfSize: toBeArrayOfSizeMatcher });
