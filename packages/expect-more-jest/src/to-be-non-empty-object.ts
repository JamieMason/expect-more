import { isNonEmptyObject } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that a value is an `Object` containing at least 1 member.
       * @example
       * expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ byId: expect.toBeNonEmptyObject() }));
       */
      toBeNonEmptyObject<T>(): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts that a value is an `Object` containing at least 1 member.
       * @example
       * expect(activeUsers.byId).toBeNonEmptyObject();
       */
      toBeNonEmptyObject(): R;
    }
  }
}

export const toBeNonEmptyObjectMatcher = (received: any) =>
  createResult({
    message: () => `expected ${received} to be an object with at least one own member`,
    notMessage: () => `expected ${received} not to be an object with at least one own member`,
    pass: isNonEmptyObject(received)
  });

expect.extend({ toBeNonEmptyObject: toBeNonEmptyObjectMatcher });
