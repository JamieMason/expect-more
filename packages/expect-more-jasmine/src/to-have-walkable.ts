import { isWalkable } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is safe to attempt to read property values from.
       * @example
       * expect({ child: { grandchild: {} } }).toHaveWalkable('child.grandchild');
       */
      toHaveWalkable(propPath: string): boolean;
    }
  }
}

export const toHaveWalkableMatcher = () => {
  return {
    compare(value: any, propPath: string) {
      const pass = isWalkable(getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(propPath)}' not to be walkable`
        : `expected value at '${printExpected(propPath)}' to be walkable`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveWalkable: toHaveWalkableMatcher,
  });
});
