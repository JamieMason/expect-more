import { createToHandleComparer } from './lib/create-result';
import { nullLeaves } from './lib/gen';

declare global {
  namespace jest {
    interface Expect {
      toHandleNullLeaves<T>(): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * When given a JSON-serialisable data structure, invokes your function multiple
       * for each copy of `shape` where a single nested leaf value has been set to
       * null. It is intended to assert that a function is resilient against
       * incomplete or invalid data received from external sources.
       *
       * See the /packages/expect-more-jest/test/gen/null-leaves.spec.ts for detail on
       * how values are deconstructed.
       * @example
       * expect(selectVenueNames).toHandleNullLeaves(upcomingEvents);
       */
      toHandleNullLeaves(): R;
    }
  }
}

export const toHandleNullLeavesMatcher = createToHandleComparer('toHandleNullLeaves', nullLeaves);

expect.extend({ toHandleNullLeaves: toHandleNullLeavesMatcher });
