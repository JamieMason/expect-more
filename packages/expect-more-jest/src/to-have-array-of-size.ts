import { isArrayOfSize } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is an `Array` containing ${size} number of values.
       * @example
       * expect({ child: { grandchild: ['i', 'contain', 4, 'items'] } }).toHaveArrayOfSize('child.grandchild', 4);
       */
      toHaveArrayOfSize(propPath: string, size: number): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is an `Array` containing ${size} number of values.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveArrayOfSize('child.grandchild', 4));
       */
      toHaveArrayOfSize<T>(propPath: string, size: number): JestMatchers<T>;
    }
  }
}

export const toHaveArrayOfSizeMatcher = (value: any, propPath: string, size: number) =>
  createResult({
    message: () => `expected value at '${propPath}' to be an array containing exactly ${size} items`,
    notMessage: () => `expected value at '${propPath}' not to be an array containing exactly ${size} items`,
    pass: isArrayOfSize(size, getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveArrayOfSize: toHaveArrayOfSizeMatcher });
