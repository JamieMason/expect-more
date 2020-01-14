import { createTreePermuter, removeNode } from './lib';

/**
 * Returns a `Generator` which emits every permutation of incomplete versions of
 * ${data} where a different primitive value is removed each time.
 */
export const withMissingLeaves: (data: any) => Generator<any, void, unknown> = createTreePermuter(
  (node, mutateNode) => {
    if (node.isLeaf) {
      removeNode(node, mutateNode);
    }
  },
  [undefined],
);
