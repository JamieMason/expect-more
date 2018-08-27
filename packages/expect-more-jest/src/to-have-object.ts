import { isObject } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that value has an own or nested named property which is an object.
       * @example
       * expect(received).toHaveBeenCalledWith(
       *   expect.toHaveObject('foo.bar')
       * );
       */
      toHaveObject<T>(propPath: string): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * Asserts that value has an own or nested named property which is an object.
       * @example
       * expect({ foo: { bar: X } }).toHaveObject('foo.bar');
       */
      toHaveObject(propPath: string): R;
    }
  }
}

export const toHaveObjectMatcher = (received: any, propPath: string) =>
  createResult({
    message: () => `expected ${propPath} of ${received} to be object`,
    notMessage: () => `expected ${propPath} of ${received} not to be object`,
    pass: isObject(getIn(propPath.split('.'), received))
  });

expect.extend({ toHaveObject: toHaveObjectMatcher });
