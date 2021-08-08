import { isFunction } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that ${value} is a `Function`.
       * @example
       * expect({ child: { grandchild: () => 'i am a function' } }).toHaveMethod('child.grandchild');
       */
      toHaveMethod(propPath: string): boolean;
    }
  }
}

export const toHaveMethodMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string) {
      const pass = isFunction(getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(propPath)}' not to be a function or async function`
        : `expected value at '${printExpected(propPath)}' to be a function or async function`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveMethod: toHaveMethodMatcher,
  });
});
