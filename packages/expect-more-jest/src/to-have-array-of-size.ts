import { isArrayOfSize } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts value has an own or nested named property which is an Array with the given number of members.
       * @example
       * expect(received).toHaveBeenCalledWith(
       *   expect.toHaveArrayOfSize('friends', 0)
       * );
       */
      toHaveArrayOfSize<T>(propPath: string, size: number): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * Asserts value has an own or nested named property which is an Array with the given number of members.
       * @example
       * expect({ foo: { bar: [true, 12] } }).toHaveArrayOfSize('foo.bar', 2);
       */
      toHaveArrayOfSize(propPath: string, size: number): R;
    }
  }
}

export const toHaveArrayOfSizeMatcher = (received: any, propPath: string, size: number) =>
  createResult({
    message: () => `expected ${propPath} of ${received} to be an array containing ${size} members`,
    notMessage: () => `expected ${propPath} of ${received} not to be an array containing ${size} members`,
    pass: isArrayOfSize(size, getIn(propPath.split('.'), received))
  });

expect.extend({ toHaveArrayOfSize: toHaveArrayOfSizeMatcher });
