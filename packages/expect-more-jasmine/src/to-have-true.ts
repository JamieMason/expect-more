import { isTrue } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is `true` or `new Boolean(true)`.
       * @example
       * expect({ child: { grandchild: true } }).toHaveTrue('child.grandchild');
       */
      toHaveTrue(propPath: string): boolean;
    }
  }
}

export const toHaveTrueMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string) {
      const pass = isTrue(getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(propPath)}' not to be true or Boolean(true)`
        : `expected value at '${printExpected(propPath)}' to be true or Boolean(true)`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveTrue: toHaveTrueMatcher,
  });
});
