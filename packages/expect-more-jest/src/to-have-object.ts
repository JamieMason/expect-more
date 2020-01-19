import { isObject } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is an `Object`.
       * @example
       * expect({ child: { grandchild: {} } }).toHaveObject('child.grandchild');
       */
      toHaveObject(propPath: string): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is an `Object`.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveObject('child.grandchild'));
       */
      toHaveObject<T>(propPath: string): JestMatchers<T>;
    }
  }
}

export const toHaveObjectMatcher = (value: any, propPath: string) =>
  createResult({
    message: () => `expected value at '${propPath}' to be an object`,
    notMessage: () => `expected value at '${propPath}' not to be an object`,
    pass: isObject(getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveObject: toHaveObjectMatcher });
