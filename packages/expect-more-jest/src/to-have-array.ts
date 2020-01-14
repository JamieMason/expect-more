import { isArray } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts value has an own or nested named property which is an Array.
       * @example
       * expect(received).toHaveBeenCalledWith(
       *   expect.toHaveArray('messages')
       * );
       */
      toHaveArray<T>(propPath: string): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts value has an own or nested named property which is an Array.
       * @example
       * expect({ foo: { bar: [] } }).toHaveArray('foo.bar');
       */
      toHaveArray(propPath: string): R;
    }
  }
}

export const toHaveArrayMatcher = (received: any, propPath: string) =>
  createResult({
    message: () => `expected ${propPath} of ${received} to be an array`,
    notMessage: () => `expected ${propPath} of ${received} not to be an array`,
    pass: isArray(getIn(propPath.split('.'), received)),
  });

expect.extend({ toHaveArray: toHaveArrayMatcher });
