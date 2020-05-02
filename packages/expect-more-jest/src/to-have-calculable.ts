import { isCalculable } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Assert value can be used in Mathemetic calculations despite not being a `Number`, for example `'1' * '2' === 2` whereas `'wut?' * 2 === NaN`.
       * @example
       * expect({ child: { grandchild: '100' } }).toHaveCalculable('child.grandchild');
       */
      toHaveCalculable(propPath: string): R;
    }
    interface Expect {
      /**
       * Assert value can be used in Mathemetic calculations despite not being a `Number`, for example `'1' * '2' === 2` whereas `'wut?' * 2 === NaN`.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveCalculable('child.grandchild'));
       */
      toHaveCalculable<T>(propPath: string): JestMatchers<T>;
    }
  }
}

export const toHaveCalculableMatcher = (value: any, propPath: string) =>
  createResult({
    message: () =>
      `expected value at '${printExpected(
        propPath,
      )}' to be coercible for use in mathemetical operations`,
    notMessage: () =>
      `expected value at '${printExpected(
        propPath,
      )}' not to be coercible for use in mathemetical operations`,
    pass: isCalculable(getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveCalculable: toHaveCalculableMatcher });
