import { isIso8601 } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that a value is a String which conforms to common use-cases of the ISO 8601 standard representation of
       * dates and times.
       * @example
       * expect(log.timestamp).toEqual(expect.toBeIso8601());
       * @example
       * expect(log).toEqual(
       *   expect.objectContaining({
       *     timestamp: expect.toBeIso8601()
       *   })
       * );
       * @example
       * expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ timestamp: expect.toBeIso8601() }));
       */
      toBeIso8601<T>(): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts that a value is a String which conforms to common use-cases of the ISO 8601 standard representation of
       * dates and times.
       * @example
       * expect(log.timestamp).toBeIso8601();
       */
      toBeIso8601(): R;
    }
  }
}

export const toBeIso8601Matcher = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a valid ISO 8601 date string`,
    notMessage: () => `expected ${received} not to be a valid ISO 8601 date string`,
    pass: isIso8601(received),
  });

expect.extend({ toBeIso8601: toBeIso8601Matcher });
