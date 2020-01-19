import { isNonEmptyArray } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is an `Array` containing at least one value.
       * @example
       * expect({ child: { grandchild: ['i', 'am not empty'] } }).toHaveNonEmptyArray('child.grandchild');
       */
      toHaveNonEmptyArray(propPath: string): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is an `Array` containing at least one value.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveNonEmptyArray('child.grandchild'));
       */
      toHaveNonEmptyArray<T>(propPath: string): JestMatchers<T>;
    }
  }
}

export const toHaveNonEmptyArrayMatcher = (value: any, propPath: string) =>
  createResult({
    message: () => `expected value at '${propPath}' to be an array with at least one item`,
    notMessage: () => `expected value at '${propPath}' not to be an array with at least one item`,
    pass: isNonEmptyArray(getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveNonEmptyArray: toHaveNonEmptyArrayMatcher });
