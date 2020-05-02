import { isIso8601 } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a String which conforms to common use-cases of the ISO 8601 standard representation of dates and times.
       * @example
       * expect({ child: { grandchild: '1999-12-31T23:59:59' } }).toHaveIso8601('child.grandchild');
       */
      toHaveIso8601(propPath: string): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a String which conforms to common use-cases of the ISO 8601 standard representation of dates and times.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveIso8601('child.grandchild'));
       */
      toHaveIso8601<T>(propPath: string): JestMatchers<T>;
    }
  }
}

export const toHaveIso8601Matcher = (value: any, propPath: string) =>
  createResult({
    message: () =>
      `expected value at '${printExpected(propPath)}' to be a valid ISO 8601 date string`,
    notMessage: () =>
      `expected value at '${printExpected(propPath)}' not to be a valid ISO 8601 date string`,
    pass: isIso8601(getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveIso8601: toHaveIso8601Matcher });
