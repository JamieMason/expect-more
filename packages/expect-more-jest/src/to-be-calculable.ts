import { isCalculable } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Assert value can be used in Mathemetic calculations despite not being a `Number`, for example `'1' * '2' === 2` whereas `'wut?' * 2 === NaN`.
       * @example
       * expect('100').toBeCalculable();
       */
      toBeCalculable(): R;
    }
    interface Expect {
      /**
       * Assert value can be used in Mathemetic calculations despite not being a `Number`, for example `'1' * '2' === 2` whereas `'wut?' * 2 === NaN`.
       * @example
       * expect('100').toEqual(
       *   expect.toBeCalculable()
       * );
       */
      toBeCalculable<T>(): JestMatchers<T>;
    }
  }
}

export const toBeCalculableMatcher = (value: any) =>
  createResult({
    message: () => `expected ${value} to be coercible for use in mathemetical operations`,
    notMessage: () => `expected ${value} not to be coercible for use in mathemetical operations`,
    pass: isCalculable(value),
  });

expect.extend({ toBeCalculable: toBeCalculableMatcher });
