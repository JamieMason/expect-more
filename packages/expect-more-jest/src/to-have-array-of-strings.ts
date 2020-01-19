import { isArrayOfStrings } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is an `Array` containing only `String` values.
       * @example
       * expect({ child: { grandchild: ['we', 'are', 'all', 'strings'] } }).toHaveArrayOfStrings('child.grandchild');
       */
      toHaveArrayOfStrings(propPath: string): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is an `Array` containing only `String` values.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveArrayOfStrings('child.grandchild'));
       */
      toHaveArrayOfStrings<T>(propPath: string): JestMatchers<T>;
    }
  }
}

export const toHaveArrayOfStringsMatcher = (value: any, propPath: string) =>
  createResult({
    message: () =>
      `expected value at '${propPath}' to be a non-empty array, containing only strings`,
    notMessage: () =>
      `expected value at '${propPath}' not to be a non-empty array, containing only strings`,
    pass: isArrayOfStrings(getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveArrayOfStrings: toHaveArrayOfStringsMatcher });
