import { isEvenNumber } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that a value is an even `Number`.
       * @example
       * expect(2).toBeEvenNumber();
       */
      toBeEvenNumber(): boolean;
    }
  }
}

export const toBeEvenNumberMatcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown) {
      const pass = isEvenNumber(value);
      const message = pass
        ? `expected ${printReceived(value)} not to be an even number`
        : `expected ${printReceived(value)} to be an even number`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeEvenNumber: toBeEvenNumberMatcher,
  });
});
