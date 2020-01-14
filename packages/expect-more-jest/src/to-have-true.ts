import { isTrue } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that value has an own or nested named property which is true.
       * @example
       * expect(received).toHaveBeenCalledWith(
       *   expect.toHaveTrue('foo.bar')
       * );
       */
      toHaveTrue<T>(propPath: string): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts that value has an own or nested named property which is true.
       * @example
       * expect({ foo: { bar: X } }).toHaveTrue('foo.bar');
       */
      toHaveTrue(propPath: string): R;
    }
  }
}

export const toHaveTrueMatcher = (received: any, propPath: string) =>
  createResult({
    message: () => `expected ${propPath} of ${received} to be true`,
    notMessage: () => `expected ${propPath} of ${received} not to be true`,
    pass: isTrue(getIn(propPath.split('.'), received)),
  });

expect.extend({ toHaveTrue: toHaveTrueMatcher });
