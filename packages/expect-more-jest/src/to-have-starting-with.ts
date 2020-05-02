import { startsWith } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Assert value is a string whose leading characters are equal to `other`.
       * @example
       * expect({ child: { grandchild: 'JavaScript' } }).toHaveStartingWith('child.grandchild', 'Java');
       */
      toHaveStartingWith(propPath: string, otherString: string): R;
    }
    interface Expect {
      /**
       * Assert value is a string whose leading characters are equal to `other`.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveStartingWith('child.grandchild', 'Java'));
       */
      toHaveStartingWith<T>(propPath: string, otherString: string): JestMatchers<T>;
    }
  }
}

export const toHaveStartingWithMatcher = (value: any, propPath: string, otherString: string) =>
  createResult({
    message: () =>
      `expected value at '${printExpected(propPath)}' to start with ${printExpected(otherString)}`,
    notMessage: () =>
      `expected value at '${printExpected(propPath)}' not to start with ${printExpected(
        otherString,
      )}`,
    pass: startsWith(otherString, getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveStartingWith: toHaveStartingWithMatcher });
