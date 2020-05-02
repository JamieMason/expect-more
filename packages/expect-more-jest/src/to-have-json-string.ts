import { isJsonString } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a `String` of valid JSON.
       * @example
       * expect({ child: { grandchild: '{"i":"am valid JSON"}' } }).toHaveJsonString('child.grandchild');
       */
      toHaveJsonString(propPath: string): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a `String` of valid JSON.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveJsonString('child.grandchild'));
       */
      toHaveJsonString<T>(propPath: string): JestMatchers<T>;
    }
  }
}

export const toHaveJsonStringMatcher = (value: any, propPath: string) =>
  createResult({
    message: () => `expected value at '${printExpected(propPath)}' to be a string of valid JSON`,
    notMessage: () =>
      `expected value at '${printExpected(propPath)}' not to be a string of valid JSON`,
    pass: isJsonString(getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveJsonString: toHaveJsonStringMatcher });
