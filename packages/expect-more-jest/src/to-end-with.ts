import { endsWith } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a string whose trailing characters are equal to ${otherString}.
       * @example
       * expect('JavaScript').toEndWith('Script');
       */
      toEndWith(otherString: string): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a string whose trailing characters are equal to ${otherString}.
       * @example
       * expect('JavaScript').toEqual(
       *   expect.toEndWith('Script')
       * );
       */
      toEndWith<T>(otherString: string): JestMatchers<T>;
    }
  }
}

export const toEndWithMatcher = (value: any, otherString: string) =>
  createResult({
    message: () => `expected ${value} to end with ${otherString}`,
    notMessage: () => `expected ${value} not to end with ${otherString}`,
    pass: endsWith(otherString, value),
  });

expect.extend({ toEndWith: toEndWithMatcher });
