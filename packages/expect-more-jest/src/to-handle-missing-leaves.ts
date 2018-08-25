import { createToHandleComparer } from './lib/create-result';
import { missingLeaves } from './lib/gen';

declare global {
  namespace jest {
    interface Expect {
      toHandleMissingLeaves<T>(): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * When given a JSON-serialisable data structure, invokes your function multiple
       * for each copy of `shape` where a single nested leaf value has been removed.
       * It is intended to assert that a function is resilient against incomplete or
       * invalid data received from external sources.
       *
       * See /packages/expect-more-jest/test/gen/missing-leaves.spec.ts for detail on
       * how values are deconstructed.
       * @example
       * expect(selectVenueNames).toHandleMissingLeaves(upcomingEvents);
       */
      toHandleMissingLeaves(): R;
    }
  }
}

export const toHandleMissingLeavesMatcher = createToHandleComparer('toHandleMissingLeaves', missingLeaves);

expect.extend({ toHandleMissingLeaves: toHandleMissingLeavesMatcher });
