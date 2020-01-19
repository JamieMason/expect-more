import { isValidDate } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is an instance of `Date` whose internal value is valid. `Date` is little like `Promise` in that it is a container for a value. For example, `new Date('wut?')` is a valid `Date` which wraps a value that is not valid.
       * @example
       * expect({ child: { grandchild: new Date('2020-01-01') } }).toHaveValidDate('child.grandchild');
       */
      toHaveValidDate(propPath: string): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is an instance of `Date` whose internal value is valid. `Date` is little like `Promise` in that it is a container for a value. For example, `new Date('wut?')` is a valid `Date` which wraps a value that is not valid.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveValidDate('child.grandchild'));
       */
      toHaveValidDate<T>(propPath: string): JestMatchers<T>;
    }
  }
}

export const toHaveValidDateMatcher = (value: any, propPath: string) =>
  createResult({
    message: () => `expected value at '${propPath}' to be an instance of Date with a valid value`,
    notMessage: () =>
      `expected value at '${propPath}' not to be an instance of Date with a valid value`,
    pass: isValidDate(getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveValidDate: toHaveValidDateMatcher });
