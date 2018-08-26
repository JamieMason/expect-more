import { isDivisibleBy } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that a value is a `Number` divisible by `other` number.
       * @param divisor
       * @example
       * expect(onPress).toHaveBeenCalledWith(
       *   expect.objectContaining({
       *     paws: expect.toBeDivisibleBy(2)
       *   })
       * );
       */
      toBeDivisibleBy<T>(ber, divisor: any): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * Asserts that a value is a `Number` divisible by `other` number.
       * @param divisor
       * @example
       * expect(cat.paws).toBeDivisibleBy(2);
       */
      toBeDivisibleBy(ber, divisor: any): R;
    }
  }
}

export const toBeDivisibleByMatcher = (received: number, divisor: any) =>
  createResult({
    message: () => `expected ${received} to be divisible by ${divisor}`,
    notMessage: () => `expected ${received} not to be divisible by ${divisor}`,
    pass: isDivisibleBy(divisor, received)
  });

expect.extend({ toBeDivisibleBy: toBeDivisibleByMatcher });
