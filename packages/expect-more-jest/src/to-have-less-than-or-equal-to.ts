import { isLessThanOrEqualTo } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is less than or equal to ${otherNumber}.
       * @example
       * expect({ child: { grandchild: 8 } }).toHaveLessThanOrEqualTo('child.grandchild', 12);
       */
      toHaveLessThanOrEqualTo(propPath: string, otherNumber: number): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is less than or equal to ${otherNumber}.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveLessThanOrEqualTo('child.grandchild', 12));
       */
      toHaveLessThanOrEqualTo<T>(propPath: string, otherNumber: number): JestMatchers<T>;
    }
  }
}

export const toHaveLessThanOrEqualToMatcher = (value: any, propPath: string, otherNumber: number) =>
  createResult({
    message: () => `expected value at '${propPath}' to be less than or equal to ${otherNumber}`,
    notMessage: () =>
      `expected value at '${propPath}' not to be less than or equal to ${otherNumber}`,
    pass: isLessThanOrEqualTo(otherNumber, getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveLessThanOrEqualTo: toHaveLessThanOrEqualToMatcher });
