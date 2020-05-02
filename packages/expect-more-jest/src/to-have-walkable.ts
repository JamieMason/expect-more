import { isWalkable } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is safe to attempt to read property values from.
       * @example
       * expect({ child: { grandchild: {} } }).toHaveWalkable('child.grandchild');
       */
      toHaveWalkable(propPath: string): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is safe to attempt to read property values from.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveWalkable('child.grandchild'));
       */
      toHaveWalkable<T>(propPath: string): JestMatchers<T>;
    }
  }
}

export const toHaveWalkableMatcher = (value: any, propPath: string) =>
  createResult({
    message: () => `expected value at '${printExpected(propPath)}' to be walkable`,
    notMessage: () => `expected value at '${printExpected(propPath)}' not to be walkable`,
    pass: isWalkable(getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveWalkable: toHaveWalkableMatcher });
