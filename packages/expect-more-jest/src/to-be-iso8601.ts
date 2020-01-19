import { isIso8601 } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a String which conforms to common use-cases of the ISO 8601 standard representation of dates and times.
       * @example
       * expect('1999-12-31T23:59:59').toBeIso8601();
       */
      toBeIso8601(): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a String which conforms to common use-cases of the ISO 8601 standard representation of dates and times.
       * @example
       * expect('1999-12-31T23:59:59').toEqual(
       *   expect.toBeIso8601()
       * );
       */
      toBeIso8601<T>(): JestMatchers<T>;
    }
  }
}

export const toBeIso8601Matcher = (value: any) =>
  createResult({
    message: () => `expected ${value} to be a valid ISO 8601 date string`,
    notMessage: () => `expected ${value} not to be a valid ISO 8601 date string`,
    pass: isIso8601(value),
  });

expect.extend({ toBeIso8601: toBeIso8601Matcher });
