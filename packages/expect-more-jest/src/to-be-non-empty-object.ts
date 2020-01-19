import { isNonEmptyObject } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is an `Object` containing at least one own member.
       * @example
       * expect({ i: 'am not empty' }).toBeNonEmptyObject();
       */
      toBeNonEmptyObject(): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is an `Object` containing at least one own member.
       * @example
       * expect({ i: 'am not empty' }).toEqual(
       *   expect.toBeNonEmptyObject()
       * );
       */
      toBeNonEmptyObject<T>(): JestMatchers<T>;
    }
  }
}

export const toBeNonEmptyObjectMatcher = (value: any) =>
  createResult({
    message: () => `expected ${value} to be an object with at least one own member`,
    notMessage: () => `expected ${value} not to be an object with at least one own member`,
    pass: isNonEmptyObject(value),
  });

expect.extend({ toBeNonEmptyObject: toBeNonEmptyObjectMatcher });
