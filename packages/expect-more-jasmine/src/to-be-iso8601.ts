import { isIso8601 } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is a String which conforms to common use-cases of the ISO 8601 standard representation of dates and times.
       * @example
       * expect('1999-12-31T23:59:59').toBeIso8601();
       */
      toBeIso8601(): boolean;
    }
  }
}

export const toBeIso8601Matcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown) {
      const pass = isIso8601(value);
      const message = pass
        ? `expected ${printReceived(value)} not to be a valid ISO 8601 date string`
        : `expected ${printReceived(value)} to be a valid ISO 8601 date string`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeIso8601: toBeIso8601Matcher,
  });
});
