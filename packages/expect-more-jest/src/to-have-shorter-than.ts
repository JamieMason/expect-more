import { isShorterThan } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a `String` or `Array` whose length is less than that of ${otherStringOrArray}.
       * @example
       * expect({ child: { grandchild: ['i have one item'] } }).toHaveShorterThan('child.grandchild', ['i', 'have', 4, 'items']);
       */
      toHaveShorterThan(propPath: string, otherStringOrArray: string | any[]): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a `String` or `Array` whose length is less than that of ${otherStringOrArray}.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveShorterThan('child.grandchild', ['i', 'have', 4, 'items']));
       */
      toHaveShorterThan<T>(propPath: string, otherStringOrArray: string | any[]): JestMatchers<T>;
    }
  }
}

export const toHaveShorterThanMatcher = (
  value: any,
  propPath: string,
  otherStringOrArray: string | any[],
) =>
  createResult({
    message: () =>
      `expected value at '${printExpected(
        propPath,
      )}' to be a string or array whose length is less than that of ${printExpected(
        otherStringOrArray,
      )}`,
    notMessage: () =>
      `expected value at '${printExpected(
        propPath,
      )}' not to be a string or array whose length is less than that of ${printExpected(
        otherStringOrArray,
      )}`,
    pass: isShorterThan(otherStringOrArray, getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveShorterThan: toHaveShorterThanMatcher });
