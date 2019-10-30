import { isJsonString } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that value has an own or nested named property which is a JSON string.
       * @example
       * expect(received).toHaveBeenCalledWith(
       *   expect.toHaveJsonString('foo.bar')
       * );
       */
      toHaveJsonString<T>(propPath: string): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts that value has an own or nested named property which is a JSON string.
       * @example
       * expect({ foo: { bar: '{}' } }).toHaveJsonString('foo.bar');
       */
      toHaveJsonString(propPath: string): R;
    }
  }
}

export const toHaveJsonStringMatcher = (received: any, propPath: string) =>
  createResult({
    message: () => `expected ${propPath} of ${received} to be a string of JSON`,
    notMessage: () => `expected ${propPath} of ${received} not to be a string of JSON`,
    pass: isJsonString(getIn(propPath.split('.'), received))
  });

expect.extend({ toHaveJsonString: toHaveJsonStringMatcher });
