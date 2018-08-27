import { isLongerThan } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that value has an own or nested named property which is a string or array longer than the given string
       * or array.
       * @example
       * expect(received).toHaveBeenCalledWith(
       *   expect.toHaveLongerThan('foo.bar')
       * );
       */
      toHaveLongerThan<T>(propPath: string, other: string | any[]): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * Asserts that value has an own or nested named property which is a string or array longer than the given string
       * or array.
       * @example
       * expect({ foo: { bar: X } }).toHaveLongerThan('foo.bar');
       */
      toHaveLongerThan(propPath: string, other: string | any[]): R;
    }
  }
}

export const toHaveLongerThanMatcher = (received: any, propPath: string, other: string | any[]) =>
  createResult({
    message: () => `expected ${propPath} of ${received} to be a string or array longer than ${other}`,
    notMessage: () => `expected ${propPath} of ${received} not to be a string or array longer than ${other}`,
    pass: isLongerThan(other, getIn(propPath.split('.'), received))
  });

expect.extend({ toHaveLongerThan: toHaveLongerThanMatcher });
