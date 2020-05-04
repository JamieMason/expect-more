import { isEmptyObject } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is a valid `Object` containing no instance members.
       * @example
       * expect({}).toBeEmptyObject();
       */
      toBeEmptyObject(): boolean;
    }
  }
}

export const toBeEmptyObjectMatcher = () => {
  return {
    compare(value: any) {
      const pass = isEmptyObject(value);
      const message = pass
        ? `expected ${printReceived(value)} not to be an empty object`
        : `expected ${printReceived(value)} to be an empty object`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeEmptyObject: toBeEmptyObjectMatcher,
  });
});
