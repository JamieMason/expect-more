import { isWalkable } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is safe to attempt to read property values from.
       * @example
       * expect({}).toBeWalkable();
       */
      toBeWalkable(): boolean;
    }
  }
}

export const toBeWalkableMatcher = () => {
  return {
    compare(value: any) {
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
