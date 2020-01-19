import { isGeneratorFunction } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a `Function` using yield syntax.
       * @example
       * expect(function* gen() { yield 'i am a generator' }).toBeGeneratorFunction();
       */
      toBeGeneratorFunction(): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a `Function` using yield syntax.
       * @example
       * expect(function* gen() { yield 'i am a generator' }).toEqual(
       *   expect.toBeGeneratorFunction()
       * );
       */
      toBeGeneratorFunction<T>(): JestMatchers<T>;
    }
  }
}

export const toBeGeneratorFunctionMatcher = (value: any) =>
  createResult({
    message: () => `expected ${value} to be a function using yield syntax.`,
    notMessage: () => `expected ${value} not to be a function using yield syntax.`,
    pass: isGeneratorFunction(value),
  });

expect.extend({ toBeGeneratorFunction: toBeGeneratorFunctionMatcher });
