import { isCalculable } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      toBeCalculable<T>(): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * Assert subject can be used in Mathemetic calculations despite not being a `Number`,
       * for example `"1" * "2" === 2` whereas `"wut?" * 2 === NaN`.
       * @example
       * expect(ageField.value).toBeCalculable();
       * @example
       * expect(ageField.value).toEqual(expect.toBeCalculable());
       * @example
       * expect(team).toEqual(
       *   expect.objectContaining({
       *     ageField: expect.toBeCalculable()
       *   })
       * );
       * @example
       * expect(onSubmit).toHaveBeenCalledWith(
       *   expect.objectContaining({
       *     ageField: expect.toBeCalculable()
       *   })
       * );
       */
      toBeCalculable(): R;
    }
  }
}

export const toBeCalculableMatcher = (received: any) =>
  createResult({
    message: () => `expected ${received} to be coercible for use in mathemetical operations`,
    notMessage: () => `expected ${received} not to be coercible for use in mathemetical operations`,
    pass: isCalculable(received)
  });

expect.extend({ toBeCalculable: toBeCalculableMatcher });
