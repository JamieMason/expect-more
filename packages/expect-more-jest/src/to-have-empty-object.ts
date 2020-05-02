import { isEmptyObject } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a valid `Object` containing no instance members.
       * @example
       * expect({ child: { grandchild: {} } }).toHaveEmptyObject('child.grandchild');
       */
      toHaveEmptyObject(propPath: string): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a valid `Object` containing no instance members.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveEmptyObject('child.grandchild'));
       */
      toHaveEmptyObject<T>(propPath: string): JestMatchers<T>;
    }
  }
}

export const toHaveEmptyObjectMatcher = (value: any, propPath: string) =>
  createResult({
    message: () => `expected value at '${printExpected(propPath)}' to be an empty object`,
    notMessage: () => `expected value at '${printExpected(propPath)}' not to be an empty object`,
    pass: isEmptyObject(getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveEmptyObject: toHaveEmptyObjectMatcher });
