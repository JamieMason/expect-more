import { isArray, isObject } from 'expect-more';
import {
  AnyFunction,
  ArrayMutator,
  Collection,
  Deconstructor,
  IArrayLocator,
  IDeconstructorResult,
  IGenerator,
  ILocator,
  IObjectLocator,
  ObjectMutator,
  PropName
} from '../typings';
import { deepReduce } from './deep-reduce';
import { getIn } from './get-in';

const not = (fn) => (...args) => !fn(...args);
const createMutator = (isEligible, mutate) => (locator) => [locator].filter(isEligible).map(mutate);
const unwrap = (locator: ILocator) => locator.owner[locator.key];
const isBranch = (locator: ILocator): boolean => isObject(unwrap(locator)) || isArray(unwrap(locator));

const locateDescendant = (path: PropName[], clone: Collection): ILocator => {
  const key = path[path.length - 1];
  const pathToParent = path.length > 1 ? path.slice(0, path.length - 1) : [];
  const owner = pathToParent.length ? getIn(pathToParent, clone) : clone;
  return { key, owner };
};

const createDeconstructor = (
  mutateObject: ObjectMutator,
  mutateArray: ArrayMutator,
  getInitialValue: AnyFunction
): Deconstructor => (collection: Collection): any[] => {
  const original = JSON.stringify(collection);
  const mutateDescendant = (memo: any[], path: PropName[]): any[] => {
    if (path.length) {
      const clone = JSON.parse(original);
      const locator = locateDescendant(path, clone);
      if (isObject(locator.owner)) {
        mutateObject(locator as IObjectLocator);
      } else if (isArray(locator.owner)) {
        mutateArray(locator as IArrayLocator);
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

const deleteBranch: ObjectMutator = createMutator(isBranch, removeFromObject);
const deleteLeaf: ObjectMutator = createMutator(not(isBranch), removeFromObject);
const nullifyBranchInArray: ArrayMutator = createMutator(isBranch, nullifyFromArray);
const nullifyBranchInObject: ObjectMutator = createMutator(isBranch, nullifyFromObject);
const nullifyLeafInArray: ArrayMutator = createMutator(not(isBranch), nullifyFromArray);
const nullifyLeafInObject: ObjectMutator = createMutator(not(isBranch), nullifyFromObject);
const removeBranch: ArrayMutator = createMutator(isBranch, removeFromArray);
const removeLeaf: ArrayMutator = createMutator(not(isBranch), removeFromArray);

const createWrapper = (deconstructor: Deconstructor, name: string) => (collection: Collection): IGenerator => {
  const permutations = deconstructor(collection);
  return {
    assert(fn: AnyFunction): IDeconstructorResult {
      for (let i = 0, len = permutations.length; i < len; i++) {
        try {
          fn(permutations[i]);
        } catch (err) {
          return {
            error: err,
            pass: false,
            permutation: permutations[i]
          };
        }
      }
      return {
        error: null,
        pass: true,
        permutation: null
      };
    },
    name,
    permutations,
    shape: collection
  };
};

export const missingBranches = createWrapper(
  createDeconstructor(deleteBranch, removeBranch, () => [undefined]),
  'Deconstructor<MissingBranches>'
);

export const missingLeaves = createWrapper(
  createDeconstructor(deleteLeaf, removeLeaf, () => [undefined]),
  'Deconstructor<MissingLeaves>'
);

export const missingNodes = createWrapper(
  createDeconstructor(removeFromObject, removeFromArray, () => [undefined]),
  'Deconstructor<MissingNodes>'
);

export const nullBranches = createWrapper(
  createDeconstructor(nullifyBranchInObject, nullifyBranchInArray, () => [null]),
  'Deconstructor<NullBranches>'
);

export const nullLeaves = createWrapper(
  createDeconstructor(nullifyLeafInObject, nullifyLeafInArray, () => [null]),
  'Deconstructor<NullLeaves>'
);

export const nullNodes = createWrapper(
  createDeconstructor(nullifyFromObject, nullifyFromArray, () => [null]),
  'Deconstructor<NullNodes>'
);
