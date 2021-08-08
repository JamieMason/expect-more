import { isArrayOfObjects } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that ${value} is an `Array` containing only `Object` values.
       * @example
       * expect([{}, new Object()]).toBeArrayOfObjects();
       */
      toBeArrayOfObjects(): boolean;
    }
  }
}

export const toBeArrayOfObjectsMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown) {
      const pass = isArrayOfObjects(value);
      const message = pass
        ? `expected ${printReceived(value)} not to be a non-empty array, containing only objects`
        : `expected ${printReceived(value)} to be a non-empty array, containing only objects`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeArrayOfObjects: toBeArrayOfObjectsMatcher,
  });
});
