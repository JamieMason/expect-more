import { isGeneratorFunction } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is a `Function` using `yield` syntax.
       * @example
       * expect({ child: { grandchild: function* gen() { yield 'i am a generator' } } }).toHaveGeneratorFunction('child.grandchild');
       */
      toHaveGeneratorFunction(propPath: string): boolean;
    }
  }
}

export const toHaveGeneratorFunctionMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string) {
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
