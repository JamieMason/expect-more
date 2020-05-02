import { isEvenNumber } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is an even `Number`.
       * @example
       * expect(2).toBeEvenNumber();
       */
      toBeEvenNumber(): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is an even `Number`.
       * @example
       * expect(2).toEqual(
       *   expect.toBeEvenNumber()
       * );
       */
      toBeEvenNumber<T>(): JestMatchers<T>;
    }
  }
}

export const toBeEvenNumberMatcher = (value: any) =>
  createResult({
    message: () => `expected ${printReceived(value)} to be an even number`,
    notMessage: () => `expected ${printReceived(value)} not to be an even number`,
    pass: isEvenNumber(value),
  });

expect.extend({ toBeEvenNumber: toBeEvenNumberMatcher });
