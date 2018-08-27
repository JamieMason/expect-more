import { isArrayOfObjects } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that a value is an `Array` containing only `Object` values.
       * @example
       * expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ members: expect.toBeArrayOfObjects() }));
       */
      toBeArrayOfObjects<T>(): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * Asserts that a value is an `Array` containing only `Object` values.
       * @example
       * expect(team.members).toBeArrayOfObjects();
       */
      toBeArrayOfObjects(): R;
    }
  }
}

export const toBeArrayOfObjectsMatcher = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a non-empty array, containing only objects`,
    notMessage: () => `expected ${received} not to be a non-empty array, containing only objects`,
    pass: isArrayOfObjects(received)
  });

expect.extend({ toBeArrayOfObjects: toBeArrayOfObjectsMatcher });
