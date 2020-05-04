import { isSameLengthAs } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is a `String` or `Array` whose length is the same as that of ${otherStringOrArray}.
       * @example
       * expect({ child: { grandchild: ['i also have', '2 items'] } }).toHaveSameLengthAs('child.grandchild', ['i have', '2 items']);
       */
      toHaveSameLengthAs(propPath: string, otherStringOrArray: string | any[]): boolean;
    }
  }
}

export const toHaveSameLengthAsMatcher = () => {
  return {
    compare(value: any, propPath: string, otherStringOrArray: string | any[]) {
      const pass = isSameLengthAs(otherStringOrArray, getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(
            propPath,
          )}' not to be a string or array whose length is the same as that of ${printExpected(
            otherStringOrArray,
          )}`
        : `expected value at '${printExpected(
            propPath,
          )}' to be a string or array whose length is the same as that of ${printExpected(
            otherStringOrArray,
          )}`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveSameLengthAs: toHaveSameLengthAsMatcher,
  });
});
