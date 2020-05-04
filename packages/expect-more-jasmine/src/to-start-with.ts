import { startsWith } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Assert value is a string whose leading characters are equal to `other`.
       * @example
       * expect('JavaScript').toStartWith('Java');
       */
      toStartWith(otherString: string): boolean;
    }
  }
}

export const toStartWithMatcher = () => {
  return {
    compare(value: any, otherString: string) {
      const pass = startsWith(otherString, value);
      const message = pass
        ? `expected ${printReceived(value)} not to start with ${printExpected(otherString)}`
        : `expected ${printReceived(value)} to start with ${printExpected(otherString)}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toStartWith: toStartWithMatcher,
  });
});
