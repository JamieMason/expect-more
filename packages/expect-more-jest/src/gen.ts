import { isArray, isObject, isWalkable } from 'expect-more';
import { deepReduce } from './lib/deep-reduce';
import { getIn } from './lib/get-in';
import {
  ArrayLocator,
  ArrayMutator,
  Collection,
  Deconstructor,
  DeepReducer,
  Locator,
  ObjectLocator,
  ObjectMutator,
  PropName
} from './typings';

const locateDescendant = (path: PropName[], clone: Collection): Locator => {
  const key = path[path.length - 1];
  const pathToParent = path.length > 1 ? path.slice(0, path.length - 1) : [];
  const owner = pathToParent.length ? getIn(pathToParent, clone) : clone;
  return { key, owner };
};

const createDeconstructor = (
  mutateObject: ObjectMutator,
  mutateArray: ArrayMutator,
  getInitialValue: () => any
): Deconstructor => (collection: Collection): any[] => {
  const original = JSON.stringify(collection);
  const mutateDescendant = (memo: any[], path: PropName[]): any[] => {
    if (path.length) {
      const clone = JSON.parse(original);
      const locator = locateDescendant(path, clone);
      if (isObject(locator.owner)) {
        mutateObject(locator as ObjectLocator);
      } else if (isArray(locator.owner)) {
        mutateArray(locator as ArrayLocator);
      }
      if (JSON.stringify(clone) !== original) {
        memo.push(clone);
      }
    }
    return memo;
  };
  return deepReduce<any[]>(collection, mutateDescendant, getInitialValue());
};

const removeFromObject: ObjectMutator = (locator) => {
  delete locator.owner[locator.key];
};

const removeFromArray: ArrayMutator = (locator) => {
  locator.owner.splice(locator.key, 1);
};

const nullifyFromObject: ObjectMutator = (locator) => {
  locator.owner[locator.key] = null;
};

const nullifyFromArray: ArrayMutator = (locator) => {
  locator.owner.splice(locator.key, 1, null);
};

const not = (fn) => (...args) => !fn(...args);
const createMutator = (isEligible, mutate) => (locator) => [locator].filter(isEligible).map(mutate);
const unwrap = (locator: Locator) => locator.owner[locator.key];
const isBranch = (locator: Locator): boolean => isObject(unwrap(locator)) || isArray(unwrap(locator));

const deleteBranch: ObjectMutator = createMutator(isBranch, removeFromObject);
const deleteLeaf: ObjectMutator = createMutator(not(isBranch), removeFromObject);
const nullifyBranchInArray: ArrayMutator = createMutator(isBranch, nullifyFromArray);
const nullifyBranchInObject: ObjectMutator = createMutator(isBranch, nullifyFromObject);
const nullifyLeafInArray: ArrayMutator = createMutator(not(isBranch), nullifyFromArray);
const nullifyLeafInObject: ObjectMutator = createMutator(not(isBranch), nullifyFromObject);
const removeBranch: ArrayMutator = createMutator(isBranch, removeFromArray);
const removeLeaf: ArrayMutator = createMutator(not(isBranch), removeFromArray);

export const missingBranches = createDeconstructor(deleteBranch, removeBranch, () => [undefined]);
export const missingLeaves = createDeconstructor(deleteLeaf, removeLeaf, () => [undefined]);
export const missingNodes = createDeconstructor(removeFromObject, removeFromArray, () => [undefined]);
export const nullBranches = createDeconstructor(nullifyBranchInObject, nullifyBranchInArray, () => [null]);
export const nullLeaves = createDeconstructor(nullifyLeafInObject, nullifyLeafInArray, () => [null]);
export const nullNodes = createDeconstructor(nullifyFromObject, nullifyFromArray, () => [null]);
