import { isAfter } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that value has an own or nested named property which is a date after the given date.
       * @example
       * expect(received).toHaveBeenCalledWith(
       *   expect.toHaveDateAfter('foo.bar')
       * );
       */
      toHaveDateAfter<T>(propPath: string, otherDate: Date): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts that value has an own or nested named property which is a date after the given date.
       * @example
       * expect({ foo: { bar: X } }).toHaveDateAfter('foo.bar');
       */
      toHaveDateAfter(propPath: string, otherDate: Date): R;
    }
  }
}

export const toHaveDateAfterMatcher = (received: any, propPath: string, otherDate: Date) =>
  createResult({
    message: () => `expected ${propPath} of ${received} to be date after ${otherDate}`,
    notMessage: () => `expected ${propPath} of ${received} not to be date after ${otherDate}`,
    pass: isAfter(otherDate, getIn(propPath.split('.'), received))
  });

expect.extend({ toHaveDateAfter: toHaveDateAfterMatcher });
