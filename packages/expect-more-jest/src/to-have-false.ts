import { isFalse } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is `false` or `new Boolean(false)`.
       * @example
       * expect({ child: { grandchild: false } }).toHaveFalse('child.grandchild');
       */
      toHaveFalse(propPath: string): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is `false` or `new Boolean(false)`.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveFalse('child.grandchild'));
       */
      toHaveFalse<T>(propPath: string): JestMatchers<T>;
    }
  }
}

export const toHaveFalseMatcher = (value: any, propPath: string) =>
  createResult({
    message: () => `expected value at '${propPath}' to be false or Boolean(false)`,
    notMessage: () => `expected value at '${propPath}' not to be false or Boolean(false)`,
    pass: isFalse(getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveFalse: toHaveFalseMatcher });
