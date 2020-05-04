import { isGeneratorFunction } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is a `Function` using yield syntax.
       * @example
       * expect({ child: { grandchild: function* gen() { yield 'i am a generator' } } }).toHaveGeneratorFunction('child.grandchild');
       */
      toHaveGeneratorFunction(propPath: string): boolean;
    }
  }
}

export const toHaveGeneratorFunctionMatcher = () => {
  return {
    compare(value: any, propPath: string) {
      const pass = isGeneratorFunction(getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(propPath)}' not to be a function using yield syntax.`
        : `expected value at '${printExpected(propPath)}' to be a function using yield syntax.`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveGeneratorFunction: toHaveGeneratorFunctionMatcher,
  });
});
