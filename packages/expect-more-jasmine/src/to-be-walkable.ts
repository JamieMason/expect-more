/// <reference types="jasmine" />

import { isWalkable } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is safe to attempt to read property values from.
       * @example
       * expect({}).toBeWalkable();
       */
      toBeWalkable(): boolean;
    }
  }
}

export const toBeWalkableMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown) {
      const pass = isWalkable(value);
      const message = pass
        ? `expected ${printReceived(value)} not to be walkable`
        : `expected ${printReceived(value)} to be walkable`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeWalkable: toBeWalkableMatcher,
  });
});
