import { isWholeNumber } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a `Number` with no positive decimal places.
       * @example
       * expect({ child: { grandchild: 8 } }).toHaveWholeNumber('child.grandchild');
       */
      toHaveWholeNumber(propPath: string): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a `Number` with no positive decimal places.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveWholeNumber('child.grandchild'));
       */
      toHaveWholeNumber<T>(propPath: string): JestMatchers<T>;
    }
  }
}

export const toHaveWholeNumberMatcher = (value: any, propPath: string) =>
  createResult({
    message: () => `expected value at '${printExpected(propPath)}' to be a whole number`,
    notMessage: () => `expected value at '${printExpected(propPath)}' not to be a whole number`,
    pass: isWholeNumber(getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveWholeNumber: toHaveWholeNumberMatcher });
