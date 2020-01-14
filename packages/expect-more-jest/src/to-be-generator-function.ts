import { isGeneratorFunction } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that a value is a function using yield syntax.
       * @example
       * expect(onPress).toHaveBeenCalledWith(expect.toBeGeneratorFunction())
       */
      toBeGeneratorFunction<T>(): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts that a value is a function using yield syntax.
       * @example
       * expect(async function(){}).toBeGeneratorFunction();
       */
      toBeGeneratorFunction(): R;
    }
  }
}

export const toBeGeneratorFunctionMatcher = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a function using yield syntax`,
    notMessage: () => `expected ${received} not to be a function using yield syntax`,
    pass: isGeneratorFunction(received),
  });

expect.extend({ toBeGeneratorFunction: toBeGeneratorFunctionMatcher });
