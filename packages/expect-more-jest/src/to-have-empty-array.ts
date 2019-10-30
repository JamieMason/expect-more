import { isEmptyArray } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that value has an own or nested named property which is an empty array.
       * @example
       * expect(received).toHaveBeenCalledWith(
       *   expect.toHaveEmptyArray('foo.bar')
       * );
       */
      toHaveEmptyArray<T>(propPath: string): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts that value has an own or nested named property which is an empty array.
       * @example
       * expect({ foo: { bar: [] } }).toHaveEmptyArray('foo.bar');
       */
      toHaveEmptyArray(propPath: string): R;
    }
  }
}

export const toHaveEmptyArrayMatcher = (received: any, propPath: string) =>
  createResult({
    message: () => `expected ${propPath} of ${received} to be an empty array`,
    notMessage: () => `expected ${propPath} of ${received} not to be an empty array`,
    pass: isEmptyArray(getIn(propPath.split('.'), received))
  });

expect.extend({ toHaveEmptyArray: toHaveEmptyArrayMatcher });
