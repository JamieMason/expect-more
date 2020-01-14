import { isCalculable } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that value has an own or nested named property which is calculable.
       * @example
       * expect(received).toHaveBeenCalledWith(
       *   expect.toHaveCalculable('foo.bar')
       * );
       */
      toHaveCalculable<T>(propPath: string): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts that value has an own or nested named property which is calculable.
       * @example
       * expect({ foo: { bar: X } }).toHaveCalculable('foo.bar');
       */
      toHaveCalculable(propPath: string): R;
    }
  }
}

export const toHaveCalculableMatcher = (received: any, propPath: string) =>
  createResult({
    message: () => `expected ${propPath} of ${received} to be calculable`,
    notMessage: () => `expected ${propPath} of ${received} not to be calculable`,
    pass: isCalculable(getIn(propPath.split('.'), received)),
  });

expect.extend({ toHaveCalculable: toHaveCalculableMatcher });
