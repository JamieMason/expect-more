import { isJsonString } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is a `String` of valid JSON.
       * @example
       * expect({ child: { grandchild: '{"i":"am valid JSON"}' } }).toHaveJsonString('child.grandchild');
       */
      toHaveJsonString(propPath: string): boolean;
    }
  }
}

export const toHaveJsonStringMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string) {
      const pass = isJsonString(getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(propPath)}' not to be a string of valid JSON`
        : `expected value at '${printExpected(propPath)}' to be a string of valid JSON`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveJsonString: toHaveJsonStringMatcher,
  });
});
