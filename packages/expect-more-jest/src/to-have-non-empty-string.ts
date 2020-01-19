import { isNonEmptyString } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a valid `String` containing at least one character.
       * @example
       * expect({ child: { grandchild: 'i am not empty' } }).toHaveNonEmptyString('child.grandchild');
       */
      toHaveNonEmptyString(propPath: string): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a valid `String` containing at least one character.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveNonEmptyString('child.grandchild'));
       */
      toHaveNonEmptyString<T>(propPath: string): JestMatchers<T>;
    }
  }
}

export const toHaveNonEmptyStringMatcher = (value: any, propPath: string) =>
  createResult({
    message: () => `expected value at '${propPath}' to be a string with at least one character`,
    notMessage: () => `expected value at '${propPath}' not to be a string with at least one character`,
    pass: isNonEmptyString(getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveNonEmptyString: toHaveNonEmptyStringMatcher });
