import { isValidDate } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that ${value} is an instance of `Date` whose internal value is valid. `Date` is little like `Promise` in that it is a container for a value. For example, `new Date('wut?')` is a valid `Date` which wraps a value that is not valid.
       * @example
       * expect(new Date('2020-01-01')).toBeValidDate();
       */
      toBeValidDate(): boolean;
    }
  }
}

export const toBeValidDateMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown) {
      const pass = isValidDate(value);
      const message = pass
        ? `expected ${printReceived(value)} not to be an instance of Date with a valid value`
        : `expected ${printReceived(value)} to be an instance of Date with a valid value`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeValidDate: toBeValidDateMatcher,
  });
});
