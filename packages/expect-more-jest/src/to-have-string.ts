import { isString } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a `String` or `new String()`.
       * @example
       * expect({ child: { grandchild: 'i am a string' } }).toHaveString('child.grandchild');
       */
      toHaveString(propPath: string): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a `String` or `new String()`.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveString('child.grandchild'));
       */
      toHaveString<T>(propPath: string): JestMatchers<T>;
    }
  }
}

export const toHaveStringMatcher = (value: any, propPath: string) =>
  createResult({
    message: () => `expected value at '${printExpected(propPath)}' to be a string`,
    notMessage: () => `expected value at '${printExpected(propPath)}' not to be a string`,
    pass: isString(getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveString: toHaveStringMatcher });
