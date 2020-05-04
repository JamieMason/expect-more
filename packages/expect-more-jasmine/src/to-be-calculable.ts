import { isCalculable } from 'expect-more';
import { printReceived } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Assert value can be used in Mathemetic calculations despite not being a `Number`, for example `'1' * '2' === 2` whereas `'wut?' * 2 === NaN`.
       * @example
       * expect('100').toBeCalculable();
       */
      toBeCalculable(): boolean;
    }
  }
}

export const toBeCalculableMatcher = () => {
  return {
    compare(value: any) {
      const pass = isCalculable(value);
      const message = pass
        ? `expected ${printReceived(value)} not to be coercible for use in mathemetical operations`
        : `expected ${printReceived(value)} to be coercible for use in mathemetical operations`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toBeCalculable: toBeCalculableMatcher,
  });
});
