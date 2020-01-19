import { isBoolean } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is `true`, `false`, `new Boolean(true)`, or `new Boolean(false)`.
       * @example
       * expect({ child: { grandchild: false } }).toHaveBoolean('child.grandchild');
       */
      toHaveBoolean(propPath: string): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is `true`, `false`, `new Boolean(true)`, or `new Boolean(false)`.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveBoolean('child.grandchild'));
       */
      toHaveBoolean<T>(propPath: string): JestMatchers<T>;
    }
  }
}

export const toHaveBooleanMatcher = (value: any, propPath: string) =>
  createResult({
    message: () => `expected value at '${propPath}' to be true, false, or an instance of Boolean`,
    notMessage: () =>
      `expected value at '${propPath}' not to be true, false, or an instance of Boolean`,
    pass: isBoolean(getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveBoolean: toHaveBooleanMatcher });
