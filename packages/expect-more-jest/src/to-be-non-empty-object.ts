import { isNonEmptyObject } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      toBeNonEmptyObject<T>(): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * Asserts that a value is an `Object` containing at least 1 member.
       * @example
       * expect(activeUsers.byId).toBeNonEmptyObject();
       * @example
       * expect(activeUsers.byId).toEqual(expect.toBeNonEmptyObject());
       * @example
       * expect(activeUsers).toEqual(
       *   expect.objectContaining({
       *     byId: expect.toBeNonEmptyObject()
       *   })
       * );
       * @example
       * expect(onPress).toHaveBeenCalledWith(
       *   expect.objectContaining({
       *     byId: expect.toBeNonEmptyObject()
       *   })
       * );
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
