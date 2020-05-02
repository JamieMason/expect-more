import { isDecimalNumber } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a `Number` with positive decimal places.
       * @example
       * expect({ child: { grandchild: 12.55 } }).toHaveDecimalNumber('child.grandchild');
       */
      toHaveDecimalNumber(propPath: string): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a `Number` with positive decimal places.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveDecimalNumber('child.grandchild'));
       */
      toHaveDecimalNumber<T>(propPath: string): JestMatchers<T>;
    }
  }
}

export const toHaveDecimalNumberMatcher = (value: any, propPath: string) =>
  createResult({
    message: () =>
      `expected value at '${printExpected(propPath)}' to be a number with positive decimal places`,
    notMessage: () =>
      `expected value at '${printExpected(
        propPath,
      )}' not to be a number with positive decimal places`,
    pass: isDecimalNumber(getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveDecimalNumber: toHaveDecimalNumberMatcher });
