import { isEvenNumber } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is an even `Number`.
       * @example
       * expect({ child: { grandchild: 2 } }).toHaveEvenNumber('child.grandchild');
       */
      toHaveEvenNumber(propPath: string): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is an even `Number`.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveEvenNumber('child.grandchild'));
       */
      toHaveEvenNumber<T>(propPath: string): JestMatchers<T>;
    }
  }
}

export const toHaveEvenNumberMatcher = (value: any, propPath: string) =>
  createResult({
    message: () => `expected value at '${printExpected(propPath)}' to be an even number`,
    notMessage: () => `expected value at '${printExpected(propPath)}' not to be an even number`,
    pass: isEvenNumber(getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveEvenNumber: toHaveEvenNumberMatcher });
