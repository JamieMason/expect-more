import { isFunction } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      toBeFunction<T>(): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * Asserts that a value is a `Function`.
       * @example
       * expect(player.shoot).toBeFunction();
       */
      toBeFunction(): R;
    }
  }
}

export const toBeFunctionMatcher = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a function`,
    notMessage: () => `expected ${received} not to be a function`,
    pass: isFunction(received)
  });

expect.extend({ toBeFunction: toBeFunctionMatcher });
