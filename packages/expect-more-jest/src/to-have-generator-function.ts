import { isGeneratorFunction } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a `Function` using yield syntax.
       * @example
       * expect({ child: { grandchild: function* gen() { yield 'i am a generator' } } }).toHaveGeneratorFunction('child.grandchild');
       */
      toHaveGeneratorFunction(propPath: string): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a `Function` using yield syntax.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveGeneratorFunction('child.grandchild'));
       */
      toHaveGeneratorFunction<T>(propPath: string): JestMatchers<T>;
    }
  }
}

export const toHaveGeneratorFunctionMatcher = (value: any, propPath: string) =>
  createResult({
    message: () => `expected value at '${propPath}' to be a function using yield syntax.`,
    notMessage: () => `expected value at '${propPath}' not to be a function using yield syntax.`,
    pass: isGeneratorFunction(getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveGeneratorFunction: toHaveGeneratorFunctionMatcher });
