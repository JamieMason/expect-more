import { isSameLengthAs } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      toBeSameLengthAs<T>(other: string): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * Asserts that a value is a `String` or `Array` whose length is the same as `other`.
       * @param other
       * @example
       * expect(passwordField.value).toBeSameLengthAs(requirements.passwordLength);
       * @example
       * expect(passwordField.value).toEqual(expect.toBeSameLengthAs(requirements.passwordLength));
       * @example
       * expect(passwordField).toEqual(
       *   expect.objectContaining({
       *     value: expect.toBeSameLengthAs(requirements.passwordLength)
       *   })
       * );
       * @example
       * expect(onPress).toHaveBeenCalledWith(
       *   expect.objectContaining({
       *     value: expect.toBeSameLengthAs(requirements.passwordLength)
       *   })
       * );
       */
      toBeSameLengthAs(other: string): R;
    }
  }
}

export const toBeSameLengthAsMatcher = (received: any, other: string) =>
  createResult({
    message: () => `expected ${received} to be a string which is the same length as ${other}`,
    notMessage: () => `expected ${received} not to be a string which is the same length as ${other}`,
    pass: isSameLengthAs(other, received)
  });

expect.extend({ toBeSameLengthAs: toBeSameLengthAsMatcher });
