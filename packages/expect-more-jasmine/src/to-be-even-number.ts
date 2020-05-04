import { isEvenNumber } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is an even `Number`.
       * @example
       * expect(2).toBeEvenNumber();
       */
      toBeEvenNumber(): boolean;
    }
  }
}

export const toBeEvenNumberMatcher = () => {
  return {
    compare(value: any) {
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
