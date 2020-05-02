import { isTrue } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is `true` or `new Boolean(true)`.
       * @example
       * expect({ child: { grandchild: true } }).toHaveTrue('child.grandchild');
       */
      toHaveTrue(propPath: string): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is `true` or `new Boolean(true)`.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveTrue('child.grandchild'));
       */
      toHaveTrue<T>(propPath: string): JestMatchers<T>;
    }
  }
}

export const toHaveTrueMatcher = (value: any, propPath: string) =>
  createResult({
    message: () => `expected value at '${printExpected(propPath)}' to be true or Boolean(true)`,
    notMessage: () =>
      `expected value at '${printExpected(propPath)}' not to be true or Boolean(true)`,
    pass: isTrue(getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveTrue: toHaveTrueMatcher });
