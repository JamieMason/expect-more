import { createTreePermuter, removeNode } from './lib';

/**
 * Returns a `Generator` which emits every permutation of incomplete versions of
 * ${data} where one of every nested value is removed each time.
 */
export const withMissingNodes: (data: any) => Generator<any, void, unknown> = createTreePermuter(
  removeNode,
  [undefined],
);
