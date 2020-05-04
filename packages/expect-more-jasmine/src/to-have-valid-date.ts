import { isValidDate } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is an instance of `Date` whose internal value is valid. `Date` is little like `Promise` in that it is a container for a value. For example, `new Date('wut?')` is a valid `Date` which wraps a value that is not valid.
       * @example
       * expect({ child: { grandchild: new Date('2020-01-01') } }).toHaveValidDate('child.grandchild');
       */
      toHaveValidDate(propPath: string): boolean;
    }
  }
}

export const toHaveValidDateMatcher = () => {
  return {
    compare(value: any, propPath: string) {
      const pass = isValidDate(getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(
            propPath,
          )}' not to be an instance of Date with a valid value`
        : `expected value at '${printExpected(
            propPath,
          )}' to be an instance of Date with a valid value`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveValidDate: toHaveValidDateMatcher,
  });
});
