import { isSameLengthAs } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a `String` or `Array` whose length is the same as that of ${otherStringOrArray}.
       * @example
       * expect({ child: { grandchild: ['i also have', '2 items'] } }).toHaveSameLengthAs('child.grandchild', ['i have', '2 items']);
       */
      toHaveSameLengthAs(propPath: string, otherStringOrArray: string | any[]): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a `String` or `Array` whose length is the same as that of ${otherStringOrArray}.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveSameLengthAs('child.grandchild', ['i have', '2 items']));
       */
      toHaveSameLengthAs<T>(propPath: string, otherStringOrArray: string | any[]): JestMatchers<T>;
    }
  }
}

export const toHaveSameLengthAsMatcher = (
  value: any,
  propPath: string,
  otherStringOrArray: string | any[],
) =>
  createResult({
    message: () =>
      `expected value at '${propPath}' to be a string or array whose length is the same as that of ${otherStringOrArray}`,
    notMessage: () =>
      `expected value at '${propPath}' not to be a string or array whose length is the same as that of ${otherStringOrArray}`,
    pass: isSameLengthAs(otherStringOrArray, getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveSameLengthAs: toHaveSameLengthAsMatcher });
