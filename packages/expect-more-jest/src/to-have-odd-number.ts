import { isOddNumber } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that value has an own or nested named property which is an odd number.
       * @example
       * expect(received).toHaveBeenCalledWith(
       *   expect.toHaveOddNumber('foo.bar')
       * );
       */
      toHaveOddNumber<T>(propPath: string): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts that value has an own or nested named property which is an odd number.
       * @example
       * expect({ foo: { bar: X } }).toHaveOddNumber('foo.bar');
       */
      toHaveOddNumber(propPath: string): R;
    }
  }
}

export const toHaveOddNumberMatcher = (received: any, propPath: string) =>
  createResult({
    message: () => `expected ${propPath} of ${received} to be odd number`,
    notMessage: () => `expected ${propPath} of ${received} not to be odd number`,
    pass: isOddNumber(getIn(propPath.split('.'), received))
  });

expect.extend({ toHaveOddNumber: toHaveOddNumberMatcher });
