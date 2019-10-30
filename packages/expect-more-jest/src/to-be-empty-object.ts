import { isEmptyObject } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that a value is a valid `Object` containing no members.
       * @example
       * expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ byId: expect.toBeEmptyObject() }));
       */
      toBeEmptyObject<T>(): JestMatchers<T>;
    }
    interface Matchers<R, T> {
      /**
       * Asserts that a value is a valid `Object` containing no members.
       * @example
       * expect(openIssues.byId).toBeEmptyObject();
       */
      toBeEmptyObject(): R;
    }
  }
}

export const toBeEmptyObjectMatcher = (received: any) =>
  createResult({
    message: () => `expected ${received} to be an object without any own members`,
    notMessage: () => `expected ${received} not to be an object without any own members`,
    pass: isEmptyObject(received)
  });

expect.extend({ toBeEmptyObject: toBeEmptyObjectMatcher });
