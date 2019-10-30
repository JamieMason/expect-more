import { isEmptyObject } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that value has an own or nested named property which is an empty object.
       * @example
       * expect(received).toHaveBeenCalledWith(
       *   expect.toHaveEmptyObject('foo.bar')
       * );
       */
      toHaveEmptyObject<T>(propPath: string): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts that value has an own or nested named property which is an empty object.
       * @example
       * expect({ foo: { bar: X } }).toHaveEmptyObject('foo.bar');
       */
      toHaveEmptyObject(propPath: string): R;
    }
  }
}

export const toHaveEmptyObjectMatcher = (received: any, propPath: string) =>
  createResult({
    message: () => `expected ${propPath} of ${received} to be an empty object`,
    notMessage: () => `expected ${propPath} of ${received} not to be an empty object`,
    pass: isEmptyObject(getIn(propPath.split('.'), received))
  });

expect.extend({ toHaveEmptyObject: toHaveEmptyObjectMatcher });
