import { isNonEmptyArray } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that value has an own or nested named property which is an array with at least one member.
       * @example
       * expect(received).toHaveBeenCalledWith(
       *   expect.toHaveNonEmptyArray('foo.bar')
       * );
       */
      toHaveNonEmptyArray<T>(propPath: string): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * Asserts that value has an own or nested named property which is an array with at least one member.
       * @example
       * expect({ foo: { bar: X } }).toHaveNonEmptyArray('foo.bar');
       */
      toHaveNonEmptyArray(propPath: string): R;
    }
  }
}

export const toHaveNonEmptyArrayMatcher = (received: any, propPath: string) =>
  createResult({
    message: () => `expected ${propPath} of ${received} to be non empty array`,
    notMessage: () => `expected ${propPath} of ${received} not to be non empty array`,
    pass: isNonEmptyArray(getIn(propPath.split('.'), received))
  });

expect.extend({ toHaveNonEmptyArray: toHaveNonEmptyArrayMatcher });
