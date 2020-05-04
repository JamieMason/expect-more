import { isDate } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is an instance of `Date`.
       * @example
       * expect(new Date('2019-12-31')).toBeDate();
       */
      toBeDate(): boolean;
    }
  }
}

export const toBeDateMatcher = () => {
  return {
    compare(value: any) {
      const pass = isDate(value);
      const message = pass
        ? `expected ${printReceived(value)} not to be an instance of Date`
        : `expected ${printReceived(value)} to be an instance of Date`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeDate: toBeDateMatcher,
  });
});
