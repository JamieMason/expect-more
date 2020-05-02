import { isEmptyArray } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a valid `Array` containing no items.
       * @example
       * expect({ child: { grandchild: [] } }).toHaveEmptyArray('child.grandchild');
       */
      toHaveEmptyArray(propPath: string): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a valid `Array` containing no items.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveEmptyArray('child.grandchild'));
       */
      toHaveEmptyArray<T>(propPath: string): JestMatchers<T>;
    }
  }
}

export const toHaveEmptyArrayMatcher = (value: any, propPath: string) =>
  createResult({
    message: () =>
      `expected value at '${printExpected(propPath)}' to be an array containing no items`,
    notMessage: () =>
      `expected value at '${printExpected(propPath)}' not to be an array containing no items`,
    pass: isEmptyArray(getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveEmptyArray: toHaveEmptyArrayMatcher });
