import { isArrayOfNumbers } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is an `Array` containing only `Number` values.
       * @example
       * expect({ child: { grandchild: [12, 0, 14] } }).toHaveArrayOfNumbers('child.grandchild');
       */
      toHaveArrayOfNumbers(propPath: string): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is an `Array` containing only `Number` values.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveArrayOfNumbers('child.grandchild'));
       */
      toHaveArrayOfNumbers<T>(propPath: string): JestMatchers<T>;
    }
  }
}

export const toHaveArrayOfNumbersMatcher = (value: any, propPath: string) =>
  createResult({
    message: () => `expected value at '${propPath}' to be a non-empty array, containing only numbers`,
    notMessage: () => `expected value at '${propPath}' not to be a non-empty array, containing only numbers`,
    pass: isArrayOfNumbers(getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveArrayOfNumbers: toHaveArrayOfNumbersMatcher });
