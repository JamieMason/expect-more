import { startsWith } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R, T> {
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

export const toStartWithMatcher = (value: any, otherString: string) =>
  createResult({
    message: () => `expected ${value} to start with ${otherString}`,
    notMessage: () => `expected ${value} not to start with ${otherString}`,
    pass: startsWith(otherString, value),
  });

expect.extend({ toStartWith: toStartWithMatcher });
