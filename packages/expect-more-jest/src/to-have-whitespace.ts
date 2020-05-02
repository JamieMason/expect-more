import { isWhitespace } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a `String` containing only whitespace characters.
       * @example
       * expect({ child: { grandchild: ' ' } }).toHaveWhitespace('child.grandchild');
       */
      toHaveWhitespace(propPath: string): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a `String` containing only whitespace characters.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveWhitespace('child.grandchild'));
       */
      toHaveWhitespace<T>(propPath: string): JestMatchers<T>;
    }
  }
}

export const toHaveWhitespaceMatcher = (value: any, propPath: string) =>
  createResult({
    message: () =>
      `expected value at '${printExpected(
        propPath,
      )}' to be a string containing only whitespace characters`,
    notMessage: () =>
      `expected value at '${printExpected(
        propPath,
      )}' not to be a string containing only whitespace characters`,
    pass: isWhitespace(getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveWhitespace: toHaveWhitespaceMatcher });
