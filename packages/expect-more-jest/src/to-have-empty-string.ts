import { isEmptyString } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a valid `String` containing no characters.
       * @example
       * expect({ child: { grandchild: '' } }).toHaveEmptyString('child.grandchild');
       */
      toHaveEmptyString(propPath: string): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a valid `String` containing no characters.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveEmptyString('child.grandchild'));
       */
      toHaveEmptyString<T>(propPath: string): JestMatchers<T>;
    }
  }
}

export const toHaveEmptyStringMatcher = (value: any, propPath: string) =>
  createResult({
    message: () => `expected value at '${propPath}' to be an empty string or empty instance of String`,
    notMessage: () => `expected value at '${propPath}' not to be an empty string or empty instance of String`,
    pass: isEmptyString(getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveEmptyString: toHaveEmptyStringMatcher });
