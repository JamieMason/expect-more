import { isNumber } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that value has an own or nested named property which is a number or `new Number`.
       * @example
       * expect(received).toHaveBeenCalledWith(
       *   expect.toHaveNumber('foo.bar')
       * );
       */
      toHaveNumber<T>(propPath: string): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts that value has an own or nested named property which is a number or `new Number`.
       * @example
       * expect({ foo: { bar: X } }).toHaveNumber('foo.bar');
       */
      toHaveNumber(propPath: string): R;
    }
  }
}

export const toHaveNumberMatcher = (received: any, propPath: string) =>
  createResult({
    message: () => `expected ${propPath} of ${received} to be number`,
    notMessage: () => `expected ${propPath} of ${received} not to be number`,
    pass: isNumber(getIn(propPath.split('.'), received)),
  });

expect.extend({ toHaveNumber: toHaveNumberMatcher });
