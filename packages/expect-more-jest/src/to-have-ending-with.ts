import { endsWith } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a string whose trailing characters are equal to ${otherString}.
       * @example
       * expect({ child: { grandchild: 'JavaScript' } }).toHaveEndingWith('child.grandchild', 'Script');
       */
      toHaveEndingWith(propPath: string, otherString: string): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a string whose trailing characters are equal to ${otherString}.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveEndingWith('child.grandchild', 'Script'));
       */
      toHaveEndingWith<T>(propPath: string, otherString: string): JestMatchers<T>;
    }
  }
}

export const toHaveEndingWithMatcher = (value: any, propPath: string, otherString: string) =>
  createResult({
    message: () => `expected value at '${propPath}' to end with ${otherString}`,
    notMessage: () => `expected value at '${propPath}' not to end with ${otherString}`,
    pass: endsWith(otherString, getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveEndingWith: toHaveEndingWithMatcher });
