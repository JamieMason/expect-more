import { isNull } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is null
       * @example
       * expect({ child: { grandchild: null } }).toHaveNull('child.grandchild');
       */
      toHaveNull(propPath: string): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is null
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveNull('child.grandchild'));
       */
      toHaveNull<T>(propPath: string): JestMatchers<T>;
    }
  }
}

export const toHaveNullMatcher = (value: any, propPath: string) =>
  createResult({
    message: () => `expected value at '${printExpected(propPath)}' to be is null`,
    notMessage: () => `expected value at '${printExpected(propPath)}' not to be is null`,
    pass: isNull(getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveNull: toHaveNullMatcher });
