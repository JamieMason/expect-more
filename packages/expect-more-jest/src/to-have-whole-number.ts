import { isWholeNumber } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that value has an own or nested named property which is a number without any decimal places.
       * @example
       * expect(received).toHaveBeenCalledWith(
       *   expect.toHaveWholeNumber('foo.bar')
       * );
       */
      toHaveWholeNumber<T>(propPath: string): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts that value has an own or nested named property which is a number without any decimal places.
       * @example
       * expect({ foo: { bar: X } }).toHaveWholeNumber('foo.bar');
       */
      toHaveWholeNumber(propPath: string): R;
    }
  }
}

export const toHaveWholeNumberMatcher = (received: any, propPath: string) =>
  createResult({
    message: () => `expected ${propPath} of ${received} to be a number without any decimal places`,
    notMessage: () => `expected ${propPath} of ${received} not to be a number without any decimal places`,
    pass: isWholeNumber(getIn(propPath.split('.'), received)),
  });

expect.extend({ toHaveWholeNumber: toHaveWholeNumberMatcher });
