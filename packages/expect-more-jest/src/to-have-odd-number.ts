import { isOddNumber } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is an odd `Number`.
       * @example
       * expect({ child: { grandchild: 5 } }).toHaveOddNumber('child.grandchild');
       */
      toHaveOddNumber(propPath: string): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is an odd `Number`.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveOddNumber('child.grandchild'));
       */
      toHaveOddNumber<T>(propPath: string): JestMatchers<T>;
    }
  }
}

export const toHaveOddNumberMatcher = (value: any, propPath: string) =>
  createResult({
    message: () => `expected value at '${propPath}' to be an odd number`,
    notMessage: () => `expected value at '${propPath}' not to be an odd number`,
    pass: isOddNumber(getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveOddNumber: toHaveOddNumberMatcher });
