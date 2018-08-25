import { isEvenNumber } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      toBeEvenNumber<T>(): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * Asserts that a value is an even `Number`.
       * @example
       * expect(parallelogram.sides).toBeEvenNumber();
       * @example
       * expect(parallelogram.sides).toEqual(expect.toBeEvenNumber());
       * @example
       * expect(parallelogram).toEqual(
       *   expect.objectContaining({
       *     sides: expect.toBeEvenNumber()
       *   })
       * );
       * @example
       * expect(onPress).toHaveBeenCalledWith(
       *   expect.objectContaining({
       *     sides: expect.toBeEvenNumber()
       *   })
       * );
       */
      toBeEvenNumber(): R;
    }
  }
}

export const toBeEvenNumberMatcher = (received: any) =>
  createResult({
    message: () => `expected ${received} to be an even number`,
    notMessage: () => `expected ${received} not to be an even number`,
    pass: isEvenNumber(received)
  });

expect.extend({ toBeEvenNumber: toBeEvenNumberMatcher });
