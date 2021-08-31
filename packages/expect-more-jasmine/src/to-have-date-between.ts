import { isDateBetween } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is an instance of `Date` occurring on or after `floor` and on or before `ceiling`.
       * @example
       * expect({ child: { grandchild: new Date('2019-12-11') } }).toHaveDateBetween('child.grandchild', new Date('2019-12-10'), new Date('2019-12-12'));
       */
      toHaveDateBetween(propPath: string, floor: unknown, ceiling: unknown): boolean;
    }
  }
}

export const toHaveDateBetweenMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string, floor: unknown, ceiling: unknown) {
      const pass = isDateBetween(floor, ceiling, getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(
            propPath,
          )}' not to be an instance of Date occurring on or after ${printExpected(
            floor,
          )} and on or before ${printExpected(ceiling)}`
        : `expected value at '${printExpected(
            propPath,
          )}' to be an instance of Date occurring on or after ${printExpected(
            floor,
          )} and on or before ${printExpected(ceiling)}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveDateBetween: toHaveDateBetweenMatcher,
  });
});
