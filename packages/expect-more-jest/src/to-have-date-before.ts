import { isBefore } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a valid instance of `Date` whose value occurs before that of ${otherDate}.
       * @example
       * expect({ child: { grandchild: new Date('2019-12-31') } }).toHaveDateBefore('child.grandchild', new Date('2020-01-01'));
       */
      toHaveDateBefore(propPath: string, otherDate: Date): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a valid instance of `Date` whose value occurs before that of ${otherDate}.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveDateBefore('child.grandchild', new Date('2020-01-01')));
       */
      toHaveDateBefore<T>(propPath: string, otherDate: Date): JestMatchers<T>;
    }
  }
}

export const toHaveDateBeforeMatcher = (value: any, propPath: string, otherDate: Date) =>
  createResult({
    message: () => `expected value at '${propPath}' to be an instance of Date, occurring before ${otherDate}`,
    notMessage: () => `expected value at '${propPath}' not to be an instance of Date, occurring before ${otherDate}`,
    pass: isBefore(otherDate, getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveDateBefore: toHaveDateBeforeMatcher });
