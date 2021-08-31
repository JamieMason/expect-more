import { isBefore } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is a valid instance of `Date` whose value occurs before that of another.
       * @example
       * expect({ child: { grandchild: new Date('2019-12-31') } }).toHaveDateBefore('child.grandchild', new Date('2020-01-01'));
       */
      toHaveDateBefore(propPath: string, other: Date): boolean;
    }
  }
}

export const toHaveDateBeforeMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string, other: Date) {
      const pass = isBefore(other, getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(
            propPath,
          )}' not to be an instance of Date, occurring before ${printExpected(other)}`
        : `expected value at '${printExpected(
            propPath,
          )}' to be an instance of Date, occurring before ${printExpected(other)}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveDateBefore: toHaveDateBeforeMatcher,
  });
});
