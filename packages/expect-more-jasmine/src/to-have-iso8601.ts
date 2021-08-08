import { isIso8601 } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * Asserts that ${value} is a String which conforms to common use-cases of the ISO 8601 standard representation of dates and times.
       * @example
       * expect({ child: { grandchild: '1999-12-31T23:59:59' } }).toHaveIso8601('child.grandchild');
       */
      toHaveIso8601(propPath: string): boolean;
    }
  }
}

export const toHaveIso8601Matcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(value: unknown, propPath: string) {
      const pass = isIso8601(getIn(propPath.split('.'), value));
      const message = pass
        ? `expected value at '${printExpected(propPath)}' not to be a valid ISO 8601 date string`
        : `expected value at '${printExpected(propPath)}' to be a valid ISO 8601 date string`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    toHaveIso8601: toHaveIso8601Matcher,
  });
});
