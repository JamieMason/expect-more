import { isFunction } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a `Function`.
       * @example
       * expect({ child: { grandchild: () => 'i am a function' } }).toHaveMethod('child.grandchild');
       */
      toHaveMethod(propPath: string): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a `Function`.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveMethod('child.grandchild'));
       */
      toHaveMethod<T>(propPath: string): JestMatchers<T>;
    }
  }
}

export const toHaveMethodMatcher = (value: any, propPath: string) =>
  createResult({
    message: () =>
      `expected value at '${printExpected(propPath)}' to be a function or async function`,
    notMessage: () =>
      `expected value at '${printExpected(propPath)}' not to be a function or async function`,
    pass: isFunction(getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveMethod: toHaveMethodMatcher });
