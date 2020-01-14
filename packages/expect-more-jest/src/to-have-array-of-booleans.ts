import { isArrayOfBooleans } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts value has an own or nested named property which is an Array of booleans.
       * @example
       * expect(received).toHaveBeenCalledWith(
       *   expect.toHaveArrayOfBooleans('messages')
       * );
       */
      toHaveArrayOfBooleans<T>(propPath: string): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts value has an own or nested named property which is an Array of booleans.
       * @example
       * expect({ foo: { bar: [true, new Boolean()] } }).toHaveArrayOfBooleans('foo.bar');
       */
      toHaveArrayOfBooleans(propPath: string): R;
    }
  }
}

export const toHaveArrayOfBooleansMatcher = (received: any, propPath: string) =>
  createResult({
    message: () => `expected ${propPath} of ${received} to be an array of booleans`,
    notMessage: () => `expected ${propPath} of ${received} not to be an array of booleans`,
    pass: isArrayOfBooleans(getIn(propPath.split('.'), received)),
  });

expect.extend({ toHaveArrayOfBooleans: toHaveArrayOfBooleansMatcher });
