import { isLongerThan } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a `String` or `Array` whose length is greater than that of ${otherStringOrArray}.
       * @example
       * expect({ child: { grandchild: ['i', 'have', 3] } }).toHaveLongerThan('child.grandchild', [2, 'items']);
       */
      toHaveLongerThan(propPath: string, otherStringOrArray: string | any[]): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a `String` or `Array` whose length is greater than that of ${otherStringOrArray}.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveLongerThan('child.grandchild', [2, 'items']));
       */
      toHaveLongerThan<T>(propPath: string, otherStringOrArray: string | any[]): JestMatchers<T>;
    }
  }
}

export const toHaveLongerThanMatcher = (value: any, propPath: string, otherStringOrArray: string | any[]) =>
  createResult({
    message: () =>
      `expected value at '${propPath}' to be a string or array whose length is greater than that of ${otherStringOrArray}`,
    notMessage: () =>
      `expected value at '${propPath}' not to be a string or array whose length is greater than that of ${otherStringOrArray}`,
    pass: isLongerThan(otherStringOrArray, getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveLongerThan: toHaveLongerThanMatcher });
