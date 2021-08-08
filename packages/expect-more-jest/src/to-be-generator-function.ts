import { isGeneratorFunction } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R> {
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

export const toBeGeneratorFunctionMatcher = (value: unknown): jest.CustomMatcherResult =>
  createResult({
    message: () => `expected ${printReceived(value)} to be a function using yield syntax.`,
    notMessage: () => `expected ${printReceived(value)} not to be a function using yield syntax.`,
    pass: isGeneratorFunction(value),
  });

expect.extend({ toBeGeneratorFunction: toBeGeneratorFunctionMatcher });
