import { startsWith } from 'expect-more';
import { printExpected, printReceived } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Assert value is a string whose leading characters are equal to `other`.
       * @example
       * expect('JavaScript').toStartWith('Java');
       */
      toStartWith(otherString: string): R;
    }
    interface Expect {
      /**
       * Assert value is a string whose leading characters are equal to `other`.
       * @example
       * expect('JavaScript').toEqual(
       *   expect.toStartWith('Java')
       * );
       */
      toStartWith<T>(otherString: string): JestMatchers<T>;
    }
  }
}

export const toStartWithMatcher = (value: unknown, otherString: string): jest.CustomMatcherResult =>
  createResult({
    message: () => `expected ${printReceived(value)} to start with ${printExpected(otherString)}`,
    notMessage: () =>
      `expected ${printReceived(value)} not to start with ${printExpected(otherString)}`,
    pass: startsWith(otherString, value),
  });

expect.extend({ toStartWith: toStartWithMatcher });
