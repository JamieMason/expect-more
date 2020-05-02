import { isArray } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a valid `Array` containing none or any number of items of any type.
       * @example
       * expect({ child: { grandchild: [2, true, 'string'] } }).toHaveArray('child.grandchild');
       */
      toHaveArray(propPath: string): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a valid `Array` containing none or any number of items of any type.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveArray('child.grandchild'));
       */
      toHaveArray<T>(propPath: string): JestMatchers<T>;
    }
  }
}

export const toHaveArrayMatcher = (value: any, propPath: string) =>
  createResult({
    message: () => `expected value at '${printExpected(propPath)}' to be an array`,
    notMessage: () => `expected value at '${printExpected(propPath)}' not to be an array`,
    pass: isArray(getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveArray: toHaveArrayMatcher });
