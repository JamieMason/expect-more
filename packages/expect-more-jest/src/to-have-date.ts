import { isDate } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is an instance of `Date`.
       * @example
       * expect({ child: { grandchild: new Date('2019-12-31') } }).toHaveDate('child.grandchild');
       */
      toHaveDate(propPath: string): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is an instance of `Date`.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveDate('child.grandchild'));
       */
      toHaveDate<T>(propPath: string): JestMatchers<T>;
    }
  }
}

export const toHaveDateMatcher = (value: any, propPath: string) =>
  createResult({
    message: () => `expected value at '${propPath}' to be an instance of Date`,
    notMessage: () => `expected value at '${propPath}' not to be an instance of Date`,
    pass: isDate(getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveDate: toHaveDateMatcher });
