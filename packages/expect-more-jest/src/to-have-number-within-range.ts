import { isWithinRange } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that value has an own or nested named property which is a number greater than or equal to floor and
       * less than or equal to ceiling.
       * @example
       * expect(received).toHaveBeenCalledWith(
       *   expect.toHaveNumberWithinRange('foo.bar')
       * );
       */
      toHaveNumberWithinRange<T>(propPath: string, floor: number, ceiling: number): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts that value has an own or nested named property which is a number greater than or equal to floor and
       * less than or equal to ceiling.
       * @example
       * expect({ foo: { bar: X } }).toHaveNumberWithinRange('foo.bar');
       */
      toHaveNumberWithinRange(propPath: string, floor: number, ceiling: number): R;
    }
  }
}

export const toHaveNumberWithinRangeMatcher = (received: any, propPath: string, floor: number, ceiling: number) =>
  createResult({
    message: () => `expected ${propPath} of ${received} to be number within range ${floor} - ${ceiling}`,
    notMessage: () => `expected ${propPath} of ${received} not to be number within range ${floor} - ${ceiling}`,
    pass: isWithinRange(floor, ceiling, getIn(propPath.split('.'), received)),
  });

expect.extend({ toHaveNumberWithinRange: toHaveNumberWithinRangeMatcher });
