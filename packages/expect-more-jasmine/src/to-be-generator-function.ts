import { isGeneratorFunction } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is a `Function` using yield syntax.
       * @example
       * expect(function* gen() { yield 'i am a generator' }).toBeGeneratorFunction();
       */
      toBeGeneratorFunction(): boolean;
    }
  }
}

export const toBeGeneratorFunctionMatcher = () => {
  return {
    compare(value: any) {
      const pass = isGeneratorFunction(value);
      const message = pass
        ? `expected ${printReceived(value)} not to be a function using yield syntax.`
        : `expected ${printReceived(value)} to be a function using yield syntax.`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeGeneratorFunction: toBeGeneratorFunctionMatcher,
  });
});
