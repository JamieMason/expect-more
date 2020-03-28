import { isArray } from '../is-array';
import { isObject } from '../is-object';

export interface RootNode {
  isArray?: true;
  isBranch?: true;
  isLeaf?: true;
  isObject?: true;
  key: null;
  parentNode: null;
  path: (string | number)[];
  value: any;
}

export interface DeepNode {
  isArray?: true;
  isBranch?: true;
  isLeaf?: true;
  isObject?: true;
  key: string | number;
  parentNode: TreeNode;
  path: (string | number)[];
  value: any;
}

type TreeNode = RootNode | DeepNode;

const isDeepNode = (node: TreeNode): node is DeepNode =>
  node.key !== null && node.parentNode !== null;

export type DeepNodeVisitor = (
  node: DeepNode,
  requestMutation: (applyMutation: (key: DeepNode['key'], clonedParent: any) => void) => void,
) => void;

function* treeWalker(rootNode: any): Generator<TreeNode, void> {
  function* visit(node: TreeNode): Generator<TreeNode, void> {
    yield node;
    if (isArray(node.value)) {
      for (let i = 0, len = node.value.length; i < len; i++) {
        yield* visit({
          key: i,
          parentNode: node,
          path: node.path.concat(i),
          value: node.value[i],
        });
      }
    } else if (isObject(node.value)) {
      for (const key in node.value) {
        if (node.value.hasOwnProperty(key)) {
          yield* visit({
            key,
            parentNode: node,
            path: node.path.concat(key),
            value: node.value[key],
          });
        }
      }
    }
  }
  yield* visit({ key: null, parentNode: null, path: [], value: rootNode });
}

function* annotatedTreeWalker(rootNode: any): Generator<TreeNode, void> {
  const traverser = treeWalker(rootNode);
  for (const node of traverser) {
    if (isArray(node.value)) {
      node.isArray = true;
      node.isBranch = true;
    } else if (isObject(node.value)) {
      node.isBranch = true;
      node.isObject = true;
    } else {
      node.isLeaf = true;
    }
    yield node;
  }
}

function* permutingTreeWalker(rootNode: any, visitor: DeepNodeVisitor): Generator<any, void> {
  const traverser = annotatedTreeWalker(rootNode);
  for (const node of traverser) {
    if (isDeepNode(node)) {
      let permutation;
      visitor(node, (applyMutation) => {
        const parentPath = node.path.slice(0, -1);
        const clonedRoot = JSON.parse(JSON.stringify(rootNode));
        const getChild = (ancestor: any, key: string | number) => ancestor[key];
        const clonedParent = parentPath.reduce(getChild, clonedRoot);
        applyMutation(node.key, clonedParent);
        permutation = clonedRoot;
      });
      if (permutation) {
        yield permutation;
      }
    }
  }
}

export const createTreePermuter = (visitor: DeepNodeVisitor, initialValues: any[] = []) =>
  function* (rootNode: any) {
    const traverser = permutingTreeWalker(rootNode, visitor);
    yield* initialValues;
    for (const permutation of traverser) {
      yield permutation;
    }
  };

export const removeNode: DeepNodeVisitor = (node, mutateNode) => {
  if (node.parentNode) {
    if (node.parentNode.isArray) {
      mutateNode((key, clonedParent) => {
        clonedParent.splice(key, 1);
      });
    } else if (node.parentNode.isObject) {
      mutateNode((key, clonedParent) => {
        delete clonedParent[key];
      });
    }
  }
};

export const nullifyNode: DeepNodeVisitor = (node, mutateNode) => {
  if (node.parentNode) {
    if (node.parentNode.isArray) {
      mutateNode((key, clonedParent) => {
        clonedParent.splice(key, 1, null);
      });
    } else if (node.parentNode.isObject) {
      mutateNode((key, clonedParent) => {
        clonedParent[key] = null;
      });
    }
  }
};
