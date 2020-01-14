import { isAsyncFunction } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that a value is a function using async/await syntax.
       * @example
       * expect(onPress).toHaveBeenCalledWith(expect.toBeAsyncFunction())
       */
      toBeAsyncFunction<T>(): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts that a value is a function using async/await syntax.
       * @example
       * expect(async function(){}).toBeAsyncFunction();
       */
      toBeAsyncFunction(): R;
    }
  }
}

export const toBeAsyncFunctionMatcher = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a function using async/await syntax`,
    notMessage: () => `expected ${received} not to be a function using async/await syntax`,
    pass: isAsyncFunction(received),
  });

expect.extend({ toBeAsyncFunction: toBeAsyncFunctionMatcher });
