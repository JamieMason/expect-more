import { isArrayOfObjects } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts value has an own or nested named property which is an Array of objects.
       * @example
       * expect(received).toHaveBeenCalledWith(
       *   expect.toHaveArrayOfObjects('friends')
       * );
       */
      toHaveArrayOfObjects<T>(propPath: string): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts value has an own or nested named property which is an Array of objects.
       * @example
       * expect({ foo: { bar: [{}, new Object()] } }).toHaveArrayOfObjects('foo.bar');
       */
      toHaveArrayOfObjects(propPath: string): R;
    }
  }
}

export const toHaveArrayOfObjectsMatcher = (received: any, propPath: string) =>
  createResult({
    message: () => `expected ${propPath} of ${received} to be an array of objects`,
    notMessage: () => `expected ${propPath} of ${received} not to be an array of objects`,
    pass: isArrayOfObjects(getIn(propPath.split('.'), received))
  });

expect.extend({ toHaveArrayOfObjects: toHaveArrayOfObjectsMatcher });
