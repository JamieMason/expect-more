import { isWithinRange } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that a value is a `Number` which is both greater than or equal to `floor` and less than or equal to
       * `ceiling`.
       * @param floor
       * @param ceiling
       * @example
       * expect(onPress).toHaveBeenCalledWith(
       *   expect.objectContaining({
       *     shotsRemaining: expect.toBeWithinRange(0, weapon.capacity)
       *   })
       * );
       */
      toBeWithinRange<T>(floor: number, ceiling: number): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts that a value is a `Number` which is both greater than or equal to `floor` and less than or equal to
       * `ceiling`.
       * @param floor
       * @param ceiling
       * @example
       * expect(weapon.shotsRemaining).toBeWithinRange(0, weapon.capacity);
       */
      toBeWithinRange(floor: number, ceiling: number): R;
    }
  }
}

export const toBeWithinRangeMatcher = (received: any, floor: number, ceiling: number) => {
  return createResult({
    message: () => `expected ${received} to be within range ${floor} - ${ceiling} (inclusive}`,
    notMessage: () => `expected ${received} not to be within range ${floor} - ${ceiling} (inclusive}`,
    pass: isWithinRange(floor, ceiling, received)
  });
};

expect.extend({ toBeWithinRange: toBeWithinRangeMatcher });
