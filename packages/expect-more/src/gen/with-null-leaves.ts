import { createTreePermuter, nullifyNode } from './lib';

/**
 * Returns a `Generator` which emits every permutation of incomplete versions of
 * ${data} where a different primitive value is replaced with `null` each time.
 */
export const withNullLeaves: (data: any) => Generator<any, void, unknown> = createTreePermuter(
  (node, mutateNode) => {
    if (node.isLeaf) {
      nullifyNode(node, mutateNode);
    }
  },
  [null],
);
