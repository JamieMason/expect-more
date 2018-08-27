import { isArrayOfStrings } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts value has an own or nested named property which is an Array of strings.
       * @example
       * expect(received).toHaveBeenCalledWith(
       *   expect.toHaveArrayOfStrings('messages')
       * );
       */
      toHaveArrayOfStrings<T>(propPath: string): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * Asserts value has an own or nested named property which is an Array of strings.
       * @example
       * expect({ foo: { bar: ['hello', new String()] } }).toHaveArrayOfStrings('foo.bar');
       */
      toHaveArrayOfStrings(propPath: string): R;
    }
  }
}

export const toHaveArrayOfStringsMatcher = (received: any, propPath: string) =>
  createResult({
    message: () => `expected ${propPath} of ${received} to be an array of strings`,
    notMessage: () => `expected ${propPath} of ${received} not to be an array of strings`,
    pass: isArrayOfStrings(getIn(propPath.split('.'), received))
  });

expect.extend({ toHaveArrayOfStrings: toHaveArrayOfStringsMatcher });
