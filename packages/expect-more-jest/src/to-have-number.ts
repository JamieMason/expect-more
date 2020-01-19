import { isNumber } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a valid `Number` or `new Number()` and not `NaN`.
       * @example
       * expect({ child: { grandchild: 8 } }).toHaveNumber('child.grandchild');
       */
      toHaveNumber(propPath: string): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a valid `Number` or `new Number()` and not `NaN`.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveNumber('child.grandchild'));
       */
      toHaveNumber<T>(propPath: string): JestMatchers<T>;
    }
  }
}

export const toHaveNumberMatcher = (value: any, propPath: string) =>
  createResult({
    message: () => `expected value at '${propPath}' to be a valid number`,
    notMessage: () => `expected value at '${propPath}' not to be a valid number`,
    pass: isNumber(getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveNumber: toHaveNumberMatcher });
