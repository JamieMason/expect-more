import { isArrayOfBooleans } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is an `Array` containing only `Boolean` values.
       * @example
       * expect({ child: { grandchild: [true, false, new Boolean(true)] } }).toHaveArrayOfBooleans('child.grandchild');
       */
      toHaveArrayOfBooleans(propPath: string): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is an `Array` containing only `Boolean` values.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveArrayOfBooleans('child.grandchild'));
       */
      toHaveArrayOfBooleans<T>(propPath: string): JestMatchers<T>;
    }
  }
}

export const toHaveArrayOfBooleansMatcher = (value: any, propPath: string) =>
  createResult({
    message: () =>
      `expected value at '${printExpected(
        propPath,
      )}' to be a non-empty array, containing only boolean values`,
    notMessage: () =>
      `expected value at '${printExpected(
        propPath,
      )}' not to be a non-empty array, containing only boolean values`,
    pass: isArrayOfBooleans(getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveArrayOfBooleans: toHaveArrayOfBooleansMatcher });
