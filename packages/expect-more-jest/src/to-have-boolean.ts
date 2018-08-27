import { isBoolean } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that value has an own or nested named property which is a boolean or `new Boolean`.
       * @example
       * expect(received).toHaveBeenCalledWith(
       *   expect.toHaveBoolean('foo.bar')
       * );
       */
      toHaveBoolean<T>(propPath: string): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * Asserts that value has an own or nested named property which is a boolean or `new Boolean`.
       * @example
       * expect({ foo: { bar: X } }).toHaveBoolean('foo.bar');
       */
      toHaveBoolean(propPath: string): R;
    }
  }
}

export const toHaveBooleanMatcher = (received: any, propPath: string) =>
  createResult({
    message: () => `expected ${propPath} of ${received} to be boolean`,
    notMessage: () => `expected ${propPath} of ${received} not to be boolean`,
    pass: isBoolean(getIn(propPath.split('.'), received))
  });

expect.extend({ toHaveBoolean: toHaveBooleanMatcher });
