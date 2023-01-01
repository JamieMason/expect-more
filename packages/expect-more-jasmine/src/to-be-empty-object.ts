/// <reference types="jasmine" />

import { isEmptyObject } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is a valid `Object` containing no instance members.
       * @example
       * expect({}).toBeEmptyObject();
       */
      toBeEmptyObject(): boolean;
    }
  }
}

export const toBeEmptyObjectMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown) {
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
