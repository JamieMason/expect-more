import { isArray, isObject } from 'expect-more';
import { deepReduce } from './deep-reduce';
import { getIn } from './get-in';

export type AnyFunction = (...args: any[]) => any;
export type Collection = object | any[];
export type GeneratorCreator = (collection: Collection) => IGenerator;
export type PropName = string | number;
export type DeepReducer<T> = (memo: T, path: PropName[], value?: any) => T;

export interface ILocator {
  key: any;
  owner: any;
}

export interface IArrayLocator extends ILocator {
  key: number;
  owner: any[];
}

export interface IObjectLocator extends ILocator {
  key: string;
  owner: object;
}

export type ArrayMutator = (locator: IArrayLocator) => void;
export type ObjectMutator = (locator: IObjectLocator) => void;
export type Generator = (collection: Collection) => any[];

export interface IGeneratorResult {
  error: Error | null;
  pass: boolean;
  permutation: Collection | null;
}

export interface IGenerator {
  assert: (fn: AnyFunction) => IGeneratorResult;
  name: string;
  permutations: Collection[];
  shape: Collection;
}

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

const createGenerator = (
  mutateObject: ObjectMutator,
  mutateArray: ArrayMutator,
  getInitialValue: AnyFunction
): Generator => (collection: Collection): any[] => {
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

const createWrapper = (generator: Generator, name: string) => (collection: Collection): IGenerator => {
  const permutations = generator(collection);
  return {
    assert(fn: AnyFunction): IGeneratorResult {
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
  createGenerator(deleteBranch, removeBranch, () => [undefined]),
  'Generator<MissingBranches>'
);

export const missingLeaves = createWrapper(
  createGenerator(deleteLeaf, removeLeaf, () => [undefined]),
  'Generator<MissingLeaves>'
);

export const missingNodes = createWrapper(
  createGenerator(removeFromObject, removeFromArray, () => [undefined]),
  'Generator<MissingNodes>'
);

export const nullBranches = createWrapper(
  createGenerator(nullifyBranchInObject, nullifyBranchInArray, () => [null]),
  'Generator<NullBranches>'
);

export const nullLeaves = createWrapper(
  createGenerator(nullifyLeafInObject, nullifyLeafInArray, () => [null]),
  'Generator<NullLeaves>'
);

export const nullNodes = createWrapper(
  createGenerator(nullifyFromObject, nullifyFromArray, () => [null]),
  'Generator<NullNodes>'
);
