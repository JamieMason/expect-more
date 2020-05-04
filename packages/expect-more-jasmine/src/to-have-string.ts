import { isString } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is a `String` or `new String()`.
       * @example
       * expect({ child: { grandchild: 'i am a string' } }).toHaveString('child.grandchild');
       */
      toHaveString(propPath: string): boolean;
    }
  }
}

export const toHaveStringMatcher = () => {
  return {
    compare(value: any, propPath: string) {
      const pass = isString(getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(propPath)}' not to be a string`
        : `expected value at '${printExpected(propPath)}' to be a string`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveString: toHaveStringMatcher,
  });
});
