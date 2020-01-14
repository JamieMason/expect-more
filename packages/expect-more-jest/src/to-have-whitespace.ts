import { isWhitespace } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that value has an own or nested named property which is a string containing only whitespace characters.
       * @example
       * expect(received).toHaveBeenCalledWith(
       *   expect.toHaveWhitespace('foo.bar')
       * );
       */
      toHaveWhitespace<T>(propPath: string): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts that value has an own or nested named property which is a string containing only whitespace characters.
       * @example
       * expect({ foo: { bar: ' ' } }).toHaveWhitespace('foo.bar');
       */
      toHaveWhitespace(propPath: string): R;
    }
  }
}

export const toHaveWhitespaceMatcher = (received: any, propPath: string) =>
  createResult({
    message: () => `expected ${propPath} of ${received} to be a string of whitespace`,
    notMessage: () => `expected ${propPath} of ${received} not to be a string of whitespace`,
    pass: isWhitespace(getIn(propPath.split('.'), received)),
  });

expect.extend({ toHaveWhitespace: toHaveWhitespaceMatcher });
