import { isArrayOfNumbers } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts value has an own or nested named property which is an Array of numbers.
       * @example
       * expect(received).toHaveBeenCalledWith(
       *   expect.toHaveArrayOfNumbers('scores')
       * );
       */
      toHaveArrayOfNumbers<T>(propPath: string): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts value has an own or nested named property which is an Array of numbers.
       * @example
       * expect({ foo: { bar: [1, new Number(8)] } }).toHaveArrayOfNumbers('foo.bar');
       */
      toHaveArrayOfNumbers(propPath: string): R;
    }
  }
}

export const toHaveArrayOfNumbersMatcher = (received: any, propPath: string) =>
  createResult({
    message: () => `expected ${propPath} of ${received} to be an array of numbers`,
    notMessage: () => `expected ${propPath} of ${received} not to be an array of numbers`,
    pass: isArrayOfNumbers(getIn(propPath.split('.'), received))
  });

expect.extend({ toHaveArrayOfNumbers: toHaveArrayOfNumbersMatcher });
