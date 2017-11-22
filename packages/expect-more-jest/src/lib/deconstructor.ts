import { isArray, isObject, isWalkable } from 'expect-more';
import { ArrayMutator, Collection, DeepReducer, Locator, ObjectMutator } from '../typings';
import { deepReduce } from './deep-reduce';
import { getIn } from './get-in';

const locateDescendant = (path: Locator[], clone: Collection) => {
  const key = path[path.length - 1];
  const pathToParent = path.length > 1 ? path.slice(0, path.length - 1) : [];
  const parent = pathToParent.length ? getIn(pathToParent, clone) : clone;
  return { key, parent };
};

const deconstruct = (
  mutateObject: ObjectMutator,
  mutateArray: ArrayMutator,
  initialValue: any[],
  collection: Collection
): any[] => {
  const original = JSON.stringify(collection);
  const mutateDescendant = (memo: any[], path: Locator[]): any[] => {
    if (path.length) {
      const clone = JSON.parse(original);
      const { key, parent } = locateDescendant(path, clone);
      if (isObject(parent)) {
        mutateObject(key, parent);
      } else if (isArray(parent)) {
        mutateArray(key, parent);
      }
      if (JSON.stringify(clone) !== original) {
        memo.push(clone);
      }
    }
    return memo;
  };
  return deepReduce<any[]>(collection, mutateDescendant, initialValue);
};

const deleteKey = (key: string, parent: object): void => {
  delete parent[key];
};

const removeItem = (key: number, parent: any[]): void => {
  parent.splice(key, 1);
};

const nullifyKey = (key: string, parent: object): void => {
  parent[key] = null;
};

const nullifyItem = (key: number, parent: any[]): void => {
  parent.splice(key, 1, null);
};

const isBranch = (value: any): boolean => isObject(value) || isArray(value);

export const withMissingBranches = (collection: Collection) =>
  deconstruct(
    (key: string, parent: object) => {
      if (isBranch(parent[key])) {
        deleteKey(key, parent);
      }
    },
    (key: number, parent: any[]) => {
      if (isBranch(parent[key])) {
        removeItem(key, parent);
      }
    },
    [undefined],
    collection
  );

export const withMissingNodes = (collection: Collection) => deconstruct(deleteKey, removeItem, [undefined], collection);

export const withNulledBranches = (collection: Collection) =>
  deconstruct(
    (key: string, parent: object) => {
      if (isBranch(parent[key])) {
        nullifyKey(key, parent);
      }
    },
    (key: number, parent: any[]) => {
      if (isBranch(parent[key])) {
        nullifyItem(key, parent);
      }
    },
    [null],
    collection
  );

export const withNulledNodes = (collection: Collection) => deconstruct(nullifyKey, nullifyItem, [null], collection);
