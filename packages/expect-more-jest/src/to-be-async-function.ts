import { isAsyncFunction } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that ${value} is a function using async/await syntax.
       * @example
       * expect(async () => { await fetch('...') }).toBeAsyncFunction();
       */
      toBeAsyncFunction(): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a function using async/await syntax.
       * @example
       * expect(async () => { await fetch('...') }).toEqual(
       *   expect.toBeAsyncFunction()
       * );
       */
      toBeAsyncFunction<T>(): JestMatchers<T>;
    }
  }
}

export const toBeAsyncFunctionMatcher = (value: unknown): jest.CustomMatcherResult =>
  createResult({
    message: () => `expected ${printReceived(value)} to be a \`Function\` using async/await syntax`,
    notMessage: () =>
      `expected ${printReceived(value)} not to be a function using async/await syntax`,
    pass: isAsyncFunction(value),
  });

expect.extend({ toBeAsyncFunction: toBeAsyncFunctionMatcher });
