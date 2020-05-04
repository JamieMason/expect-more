import { isNonEmptyObject } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is an `Object` containing at least one own member.
       * @example
       * expect({ i: 'am not empty' }).toBeNonEmptyObject();
       */
      toBeNonEmptyObject(): boolean;
    }
  }
}

export const toBeNonEmptyObjectMatcher = () => {
  return {
    compare(value: any) {
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
