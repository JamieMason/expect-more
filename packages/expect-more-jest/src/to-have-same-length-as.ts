import { isSameLengthAs } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that value has an own or nested named property which is a string same or array length as the given
       * string or array.
       * @example
       * expect(received).toHaveBeenCalledWith(
       *   expect.toHaveSameLengthAs('foo.bar')
       * );
       */
      toHaveSameLengthAs<T>(propPath: string, other: string | any[]): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts that value has an own or nested named property which is a string same or array length as the given
       * string or array.
       * @example
       * expect({ foo: { bar: X } }).toHaveSameLengthAs('foo.bar');
       */
      toHaveSameLengthAs(propPath: string, other: string | any[]): R;
    }
  }
}

export const toHaveSameLengthAsMatcher = (received: any, propPath: string, other: string | any[]) =>
  createResult({
    message: () => `expected ${propPath} of ${received} to be a string or array same length as ${other}`,
    notMessage: () => `expected ${propPath} of ${received} not to be a string or array same length as ${other}`,
    pass: isSameLengthAs(other, getIn(propPath.split('.'), received))
  });

expect.extend({ toHaveSameLengthAs: toHaveSameLengthAsMatcher });
