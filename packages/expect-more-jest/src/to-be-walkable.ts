import { isWalkable } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is safe to attempt to read property values from.
       * @example
       * expect({}).toBeWalkable();
       */
      toBeWalkable(): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is safe to attempt to read property values from.
       * @example
       * expect({}).toEqual(
       *   expect.toBeWalkable()
       * );
       */
      toBeWalkable<T>(): JestMatchers<T>;
    }
  }
}

export const toBeWalkableMatcher = (value: any) =>
  createResult({
    message: () => `expected ${value} to be walkable`,
    notMessage: () => `expected ${value} not to be walkable`,
    pass: isWalkable(value),
  });

expect.extend({ toBeWalkable: toBeWalkableMatcher });
