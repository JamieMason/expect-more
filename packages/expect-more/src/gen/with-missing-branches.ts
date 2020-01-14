import { createTreePermuter, removeNode } from './lib';

/**
 * Returns a `Generator` which emits every permutation of incomplete versions of
 * ${data} where a different `Object` or `Array` is `undefined` each time.
 */
export const withMissingBranches: (data: any) => Generator<any, void, unknown> = createTreePermuter(
  (node, mutateNode) => {
    if (node.isBranch) {
      removeNode(node, mutateNode);
    }
  },
  [undefined],
);
