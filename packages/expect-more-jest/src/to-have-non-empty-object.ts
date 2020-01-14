import { isNonEmptyObject } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that value has an own or nested named property which is an object with at least one member.
       * @example
       * expect(received).toHaveBeenCalledWith(
       *   expect.toHaveNonEmptyObject('foo.bar')
       * );
       */
      toHaveNonEmptyObject<T>(propPath: string): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts that value has an own or nested named property which is an object with at least one member.
       * @example
       * expect({ foo: { bar: X } }).toHaveNonEmptyObject('foo.bar');
       */
      toHaveNonEmptyObject(propPath: string): R;
    }
  }
}

export const toHaveNonEmptyObjectMatcher = (received: any, propPath: string) =>
  createResult({
    message: () => `expected ${propPath} of ${received} to be non empty object`,
    notMessage: () => `expected ${propPath} of ${received} not to be non empty object`,
    pass: isNonEmptyObject(getIn(propPath.split('.'), received)),
  });

expect.extend({ toHaveNonEmptyObject: toHaveNonEmptyObjectMatcher });
