import { isEvenNumber } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that value has an own or nested named property which is an even number or `new Number`.
       * @example
       * expect(received).toHaveBeenCalledWith(
       *   expect.toHaveEvenNumber('foo.bar')
       * );
       */
      toHaveEvenNumber<T>(propPath: string): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts that value has an own or nested named property which is an even number or `new Number`.
       * @example
       * expect({ foo: { bar: 4 } }).toHaveEvenNumber('foo.bar');
       */
      toHaveEvenNumber(propPath: string): R;
    }
  }
}

export const toHaveEvenNumberMatcher = (received: any, propPath: string) =>
  createResult({
    message: () => `expected ${propPath} of ${received} to be an even number`,
    notMessage: () => `expected ${propPath} of ${received} not to be an even number`,
    pass: isEvenNumber(getIn(propPath.split('.'), received))
  });

expect.extend({ toHaveEvenNumber: toHaveEvenNumberMatcher });
