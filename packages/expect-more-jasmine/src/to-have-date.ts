import { isDate } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is an instance of `Date`.
       * @example
       * expect({ child: { grandchild: new Date('2019-12-31') } }).toHaveDate('child.grandchild');
       */
      toHaveDate(propPath: string): boolean;
    }
  }
}

export const toHaveDateMatcher = () => {
  return {
    compare(value: any, propPath: string) {
      const pass = isDate(getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(propPath)}' not to be an instance of Date`
        : `expected value at '${printExpected(propPath)}' to be an instance of Date`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveDate: toHaveDateMatcher,
  });
});
