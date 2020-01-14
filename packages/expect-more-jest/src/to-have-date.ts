import { isDate } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that value has an own or nested named property which is a date.
       * @example
       * expect(received).toHaveBeenCalledWith(
       *   expect.toHaveDate('foo.bar')
       * );
       */
      toHaveDate<T>(propPath: string): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts that value has an own or nested named property which is a date.
       * @example
       * expect({ foo: { bar: new Date() } }).toHaveDate('foo.bar');
       */
      toHaveDate(propPath: string): R;
    }
  }
}

export const toHaveDateMatcher = (received: any, propPath: string) =>
  createResult({
    message: () => `expected ${propPath} of ${received} to be an instance of Date`,
    notMessage: () => `expected ${propPath} of ${received} not to be an instance of Date`,
    pass: isDate(getIn(propPath.split('.'), received)),
  });

expect.extend({ toHaveDate: toHaveDateMatcher });
