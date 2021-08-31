import { isAsyncFunction } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is a function using `async` and `await` syntax.
       * @example
       * expect({ child: { grandchild: async () => { await fetch('...') } } }).toHaveAsyncFunction('child.grandchild');
       */
      toHaveAsyncFunction(propPath: string): boolean;
    }
  }
}

export const toHaveAsyncFunctionMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string) {
      const pass = isAsyncFunction(getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(
            propPath,
          )}' not to be a function using async/await syntax`
        : `expected value at '${printExpected(
            propPath,
          )}' to be a \`Function\` using async/await syntax`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveAsyncFunction: toHaveAsyncFunctionMatcher,
  });
});
