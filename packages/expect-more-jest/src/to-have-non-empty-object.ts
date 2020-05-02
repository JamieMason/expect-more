import { isNonEmptyObject } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is an `Object` containing at least one own member.
       * @example
       * expect({ child: { grandchild: { i: 'am not empty' } } }).toHaveNonEmptyObject('child.grandchild');
       */
      toHaveNonEmptyObject(propPath: string): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is an `Object` containing at least one own member.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveNonEmptyObject('child.grandchild'));
       */
      toHaveNonEmptyObject<T>(propPath: string): JestMatchers<T>;
    }
  }
}

export const toHaveNonEmptyObjectMatcher = (value: any, propPath: string) =>
  createResult({
    message: () =>
      `expected value at '${printExpected(propPath)}' to be an object with at least one own member`,
    notMessage: () =>
      `expected value at '${printExpected(
        propPath,
      )}' not to be an object with at least one own member`,
    pass: isNonEmptyObject(getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveNonEmptyObject: toHaveNonEmptyObjectMatcher });
