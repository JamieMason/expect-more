import { isJsonString } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is a `String` of valid JSON.
       * @example
       * expect('{"i":"am valid JSON"}').toBeJsonString();
       */
      toBeJsonString(): boolean;
    }
  }
}

export const toBeJsonStringMatcher = () => {
  return {
    compare(value: any) {
      const pass = isJsonString(value);
      const message = pass
        ? `expected ${printReceived(value)} not to be a string of valid JSON`
        : `expected ${printReceived(value)} to be a string of valid JSON`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeJsonString: toBeJsonStringMatcher,
  });
});
