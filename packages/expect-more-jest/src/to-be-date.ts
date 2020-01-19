import { isDate } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R, T> {
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

export const toBeDateMatcher = (value: any) =>
  createResult({
    message: () => `expected ${value} to be an instance of Date`,
    notMessage: () => `expected ${value} not to be an instance of Date`,
    pass: isDate(value),
  });

expect.extend({ toBeDate: toBeDateMatcher });
