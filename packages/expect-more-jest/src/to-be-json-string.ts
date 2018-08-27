import { isJsonString } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that a value is a `String` of valid JSON.
       * @example
       * expect(response.body).toEqual(expect.toBeJsonString());
       * @example
       * expect(response).toEqual(
       *   expect.objectContaining({
       *     body: expect.toBeJsonString()
       *   })
       * );
       * @example
       * expect(onPress).toHaveBeenCalledWith(expect.objectContaining({ body: expect.toBeJsonString() }));
       */
      toBeJsonString<T>(): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * Asserts that a value is a `String` of valid JSON.
       * @example
       * expect(response.body).toBeJsonString();
       */
      toBeJsonString(): R;
    }
  }
}

export const toBeJsonStringMatcher = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a string of valid JSON`,
    notMessage: () => `expected ${received} not to be a string of valid JSON`,
    pass: isJsonString(received)
  });

expect.extend({ toBeJsonString: toBeJsonStringMatcher });
