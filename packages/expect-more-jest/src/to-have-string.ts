import { isString } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that value has an own or nested named property which is a string.
       * @example
       * expect(received).toHaveBeenCalledWith(
       *   expect.toHaveString('foo.bar')
       * );
       */
      toHaveString<T>(propPath: string): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * Asserts that value has an own or nested named property which is a string.
       * @example
       * expect({ foo: { bar: X } }).toHaveString('foo.bar');
       */
      toHaveString(propPath: string): R;
    }
  }
}

export const toHaveStringMatcher = (received: any, propPath: string) =>
  createResult({
    message: () => `expected ${propPath} of ${received} to be string`,
    notMessage: () => `expected ${propPath} of ${received} not to be string`,
    pass: isString(getIn(propPath.split('.'), received))
  });

expect.extend({ toHaveString: toHaveStringMatcher });
