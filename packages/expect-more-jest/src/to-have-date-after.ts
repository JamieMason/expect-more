import { isAfter } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a valid instance of `Date` whose value occurs after that of ${otherDate}.
       * @example
       * expect({ child: { grandchild: new Date('2020-01-01') } }).toHaveDateAfter('child.grandchild', new Date('2019-12-31'));
       */
      toHaveDateAfter(propPath: string, otherDate: Date): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a valid instance of `Date` whose value occurs after that of ${otherDate}.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveDateAfter('child.grandchild', new Date('2019-12-31')));
       */
      toHaveDateAfter<T>(propPath: string, otherDate: Date): JestMatchers<T>;
    }
  }
}

export const toHaveDateAfterMatcher = (value: any, propPath: string, otherDate: Date) =>
  createResult({
    message: () => `expected value at '${propPath}' to be an instance of Date, occurring after ${otherDate}`,
    notMessage: () => `expected value at '${propPath}' not to be an instance of Date, occurring after ${otherDate}`,
    pass: isAfter(otherDate, getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveDateAfter: toHaveDateAfterMatcher });
