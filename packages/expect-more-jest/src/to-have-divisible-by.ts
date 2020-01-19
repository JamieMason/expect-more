import { isDivisibleBy } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a `Number` which results in a whole number when divided by ${otherNumber}.
       * @example
       * expect({ child: { grandchild: 12 } }).toHaveDivisibleBy('child.grandchild', 2);
       */
      toHaveDivisibleBy(propPath: string, otherNumber: number): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a `Number` which results in a whole number when divided by ${otherNumber}.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveDivisibleBy('child.grandchild', 2));
       */
      toHaveDivisibleBy<T>(propPath: string, otherNumber: number): JestMatchers<T>;
    }
  }
}

export const toHaveDivisibleByMatcher = (value: any, propPath: string, otherNumber: number) =>
  createResult({
    message: () => `expected value at '${propPath}' to be divisible by ${otherNumber}`,
    notMessage: () => `expected value at '${propPath}' not to be divisible by ${otherNumber}`,
    pass: isDivisibleBy(otherNumber, getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveDivisibleBy: toHaveDivisibleByMatcher });
