import { isNonEmptyObject } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is an `Object` containing at least one own member.
       * @example
       * expect({ i: 'am not empty' }).toBeNonEmptyObject();
       */
      toBeNonEmptyObject(): boolean;
    }
  }
}

export const toBeNonEmptyObjectMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown) {
      const pass = isNonEmptyObject(value);
      const message = pass
        ? `expected ${printReceived(value)} not to be an object with at least one own member`
        : `expected ${printReceived(value)} to be an object with at least one own member`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeNonEmptyObject: toBeNonEmptyObjectMatcher,
  });
});
