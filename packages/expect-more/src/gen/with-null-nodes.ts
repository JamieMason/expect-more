import { createTreePermuter, nullifyNode } from './lib';

/**
 * Returns a `Generator` which emits every permutation of incomplete versions of
 * ${data} where one of every nested value is replaced with `null` each time.
 */
export const withNullNodes: (data: any) => Generator<any, void, unknown> = createTreePermuter(
  nullifyNode,
  [null],
);
