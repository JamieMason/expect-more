import { isTrue } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is `true` or `new Boolean(true)`.
       * @example
       * expect({ child: { grandchild: true } }).toHaveTrue('child.grandchild');
       */
      toHaveTrue(propPath: string): boolean;
    }
  }
}

export const toHaveTrueMatcher = () => {
  return {
    compare(value: any, propPath: string) {
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
