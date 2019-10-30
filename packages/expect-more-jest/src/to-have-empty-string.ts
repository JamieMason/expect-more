import { isEmptyString } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that value has an own or nested named property which is an empty string.
       * @example
       * expect(received).toHaveBeenCalledWith(
       *   expect.toHaveEmptyString('foo.bar')
       * );
       */
      toHaveEmptyString<T>(propPath: string): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts that value has an own or nested named property which is an empty string.
       * @example
       * expect({ foo: { bar: '' } }).toHaveEmptyString('foo.bar');
       */
      toHaveEmptyString(propPath: string): R;
    }
  }
}

export const toHaveEmptyStringMatcher = (received: any, propPath: string) =>
  createResult({
    message: () => `expected ${propPath} of ${received} to be an empty string`,
    notMessage: () => `expected ${propPath} of ${received} not to be an empty string`,
    pass: isEmptyString(getIn(propPath.split('.'), received))
  });

expect.extend({ toHaveEmptyString: toHaveEmptyStringMatcher });
