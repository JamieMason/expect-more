import { isFunction } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that value has an own or nested named property which is a method (function).
       * @example
       * expect(received).toHaveBeenCalledWith(
       *   expect.toHaveMethod('foo.bar')
       * );
       */
      toHaveMethod<T>(propPath: string): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts that value has an own or nested named property which is a method (function).
       * @example
       * expect({ foo: { bar: X } }).toHaveMethod('foo.bar');
       */
      toHaveMethod(propPath: string): R;
    }
  }
}

export const toHaveMethodMatcher = (received: any, propPath: string) =>
  createResult({
    message: () => `expected ${propPath} of ${received} to be a method (function)`,
    notMessage: () => `expected ${propPath} of ${received} not to be a method (function)`,
    pass: isFunction(getIn(propPath.split('.'), received))
  });

expect.extend({ toHaveMethod: toHaveMethodMatcher });
