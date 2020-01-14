import { createTreePermuter, nullifyNode } from './lib';

/**
 * Returns a `Generator` which emits every permutation of incomplete versions of
 * ${data} where a different `Object` or `Array` is replaced with `null` each
 * time.
 */
export const withNullBranches: (data: any) => Generator<any, void, unknown> = createTreePermuter(
  (node, mutateNode) => {
    if (node.isBranch) {
      nullifyNode(node, mutateNode);
    }
  },
  [null],
);
