import { isFalse } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that value has an own or nested named property which is false or `new False()`.
       * @example
       * expect(received).toHaveBeenCalledWith(
       *   expect.toHaveFalse('foo.bar')
       * );
       */
      toHaveFalse<T>(propPath: string): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts that value has an own or nested named property which is false or `new False()`.
       * @example
       * expect({ foo: { bar: false } }).toHaveFalse('foo.bar');
       */
      toHaveFalse(propPath: string): R;
    }
  }
}

export const toHaveFalseMatcher = (received: any, propPath: string) =>
  createResult({
    message: () => `expected ${propPath} of ${received} to be false`,
    notMessage: () => `expected ${propPath} of ${received} not to have false`,
    pass: isFalse(getIn(propPath.split('.'), received))
  });

expect.extend({ toHaveFalse: toHaveFalseMatcher });
