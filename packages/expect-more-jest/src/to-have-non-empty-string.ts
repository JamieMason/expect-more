import { isNonEmptyString } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that value has an own or nested named property which is a string with at least one character.
       * @example
       * expect(received).toHaveBeenCalledWith(
       *   expect.toHaveNonEmptyString('foo.bar')
       * );
       */
      toHaveNonEmptyString<T>(propPath: string): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts that value has an own or nested named property which is a string with at least one character.
       * @example
       * expect({ foo: { bar: X } }).toHaveNonEmptyString('foo.bar');
       */
      toHaveNonEmptyString(propPath: string): R;
    }
  }
}

export const toHaveNonEmptyStringMatcher = (received: any, propPath: string) =>
  createResult({
    message: () => `expected ${propPath} of ${received} to be non empty string`,
    notMessage: () => `expected ${propPath} of ${received} not to be non empty string`,
    pass: isNonEmptyString(getIn(propPath.split('.'), received)),
  });

expect.extend({ toHaveNonEmptyString: toHaveNonEmptyStringMatcher });
