import { isIso8601 } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that value has an own or nested named property which is an ISO 8601 date string.
       * @example
       * expect(received).toHaveBeenCalledWith(
       *   expect.toHaveIso8601('foo.bar')
       * );
       */
      toHaveIso8601<T>(propPath: string): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts that value has an own or nested named property which is an ISO 8601 date string.
       * @example
       * expect({ foo: { bar: '2018-08-27T14:22:37' } }).toHaveIso8601('foo.bar');
       */
      toHaveIso8601(propPath: string): R;
    }
  }
}

export const toHaveIso8601Matcher = (received: any, propPath: string) =>
  createResult({
    message: () => `expected ${propPath} of ${received} to be ISO 8601 date string`,
    notMessage: () => `expected ${propPath} of ${received} not to be ISO 8601 date string`,
    pass: isIso8601(getIn(propPath.split('.'), received))
  });

expect.extend({ toHaveIso8601: toHaveIso8601Matcher });
