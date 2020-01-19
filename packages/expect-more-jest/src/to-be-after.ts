import { isAfter } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a valid instance of `Date` whose value occurs after that of ${otherDate}.
       * @example
       * expect(new Date('2020-01-01')).toBeAfter(new Date('2019-12-31'));
       */
      toBeAfter(otherDate: Date): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a valid instance of `Date` whose value occurs after that of ${otherDate}.
       * @example
       * expect(new Date('2020-01-01')).toEqual(
       *   expect.toBeAfter(new Date('2019-12-31'))
       * );
       */
      toBeAfter<T>(otherDate: Date): JestMatchers<T>;
    }
  }
}

export const toBeAfterMatcher = (value: any, otherDate: Date) =>
  createResult({
    message: () => `expected ${value} to be an instance of Date, occurring after ${otherDate}`,
    notMessage: () =>
      `expected ${value} not to be an instance of Date, occurring after ${otherDate}`,
    pass: isAfter(otherDate, value),
  });

expect.extend({ toBeAfter: toBeAfterMatcher });
