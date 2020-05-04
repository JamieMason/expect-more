import { isEvenNumber } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * Asserts that ${value} is an even `Number`.
       * @example
       * expect({ child: { grandchild: 2 } }).toHaveEvenNumber('child.grandchild');
       */
      toHaveEvenNumber(propPath: string): boolean;
    }
  }
}

export const toHaveEvenNumberMatcher = () => {
  return {
    compare(value: any, propPath: string) {
      const pass = isEvenNumber(getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(propPath)}' not to be an even number`
        : `expected value at '${printExpected(propPath)}' to be an even number`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveEvenNumber: toHaveEvenNumberMatcher,
  });
});
