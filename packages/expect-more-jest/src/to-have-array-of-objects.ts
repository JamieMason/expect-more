import { isArrayOfObjects } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is an `Array` containing only `Object` values.
       * @example
       * expect({ child: { grandchild: [{}, new Object()] } }).toHaveArrayOfObjects('child.grandchild');
       */
      toHaveArrayOfObjects(propPath: string): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is an `Array` containing only `Object` values.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveArrayOfObjects('child.grandchild'));
       */
      toHaveArrayOfObjects<T>(propPath: string): JestMatchers<T>;
    }
  }
}

export const toHaveArrayOfObjectsMatcher = (value: any, propPath: string) =>
  createResult({
    message: () => `expected value at '${propPath}' to be a non-empty array, containing only objects`,
    notMessage: () => `expected value at '${propPath}' not to be a non-empty array, containing only objects`,
    pass: isArrayOfObjects(getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveArrayOfObjects: toHaveArrayOfObjectsMatcher });
