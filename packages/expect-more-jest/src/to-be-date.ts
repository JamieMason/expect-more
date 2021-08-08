import { isDate } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that ${value} is an instance of `Date`.
       * @example
       * expect(new Date('2019-12-31')).toBeDate();
       */
      toBeDate(): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is an instance of `Date`.
       * @example
       * expect(new Date('2019-12-31')).toEqual(
       *   expect.toBeDate()
       * );
       */
      toBeDate<T>(): JestMatchers<T>;
    }
  }
}

export const toBeDateMatcher = (value: unknown): jest.CustomMatcherResult =>
  createResult({
    message: () => `expected ${printReceived(value)} to be an instance of Date`,
    notMessage: () => `expected ${printReceived(value)} not to be an instance of Date`,
    pass: isDate(value),
  });

expect.extend({ toBeDate: toBeDateMatcher });
