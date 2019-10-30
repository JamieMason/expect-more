import { isShorterThan } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that value has an own or nested named property which is a string or array shorter than the given
       * string or array.
       * @example
       * expect(received).toHaveBeenCalledWith(
       *   expect.toHaveShorterThan('foo.bar')
       * );
       */
      toHaveShorterThan<T>(propPath: string, other: string | any[]): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts that value has an own or nested named property which is a string or array shorter than the given
       * string or array.
       * @example
       * expect({ foo: { bar: X } }).toHaveShorterThan('foo.bar');
       */
      toHaveShorterThan(propPath: string, other: string | any[]): R;
    }
  }
}

export const toHaveShorterThanMatcher = (received: any, propPath: string, other: string | any[]) =>
  createResult({
    message: () => `expected ${propPath} of ${received} to be string or array shorter than ${other}`,
    notMessage: () => `expected ${propPath} of ${received} not to be string or array shorter than ${other}`,
    pass: isShorterThan(other, getIn(propPath.split('.'), received))
  });

expect.extend({ toHaveShorterThan: toHaveShorterThanMatcher });
