import { isDateBetween } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is an instance of `Date` occurring on or after `floor` and on or before `ceiling`.
       * @example
       * expect(new Date('2019-12-11')).toBeDateBetween(new Date('2019-12-10'), new Date('2019-12-12'));
       */
      toBeDateBetween(floor: unknown, ceiling: unknown): boolean;
    }
  }
}

export const toBeDateBetweenMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, floor: unknown, ceiling: unknown) {
      const pass = isDateBetween(floor, ceiling, value);
      const message = pass
        ? `expected ${printReceived(
            value,
          )} not to be an instance of Date occurring on or after ${printExpected(
            floor,
          )} and on or before ${printExpected(ceiling)}`
        : `expected ${printReceived(
            value,
          )} to be an instance of Date occurring on or after ${printExpected(
            floor,
          )} and on or before ${printExpected(ceiling)}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeDateBetween: toBeDateBetweenMatcher,
  });
});
