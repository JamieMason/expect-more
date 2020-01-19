import { isAsyncFunction } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a function using async/await syntax.
       * @example
       * expect({ child: { grandchild: async () => { await fetch('...') } } }).toHaveAsyncFunction('child.grandchild');
       */
      toHaveAsyncFunction(propPath: string): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a function using async/await syntax.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveAsyncFunction('child.grandchild'));
       */
      toHaveAsyncFunction<T>(propPath: string): JestMatchers<T>;
    }
  }
}

export const toHaveAsyncFunctionMatcher = (value: any, propPath: string) =>
  createResult({
    message: () => `expected value at '${propPath}' to be a \`Function\` using async/await syntax`,
    notMessage: () => `expected value at '${propPath}' not to be a function using async/await syntax`,
    pass: isAsyncFunction(getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveAsyncFunction: toHaveAsyncFunctionMatcher });
