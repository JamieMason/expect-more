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

export type ResultCreator = (
  options: {
    pass: boolean;
    message: () => string;
    notMessage: () => string;
  }
) => {
  message: () => string;
  pass: boolean;
};

declare global {
  namespace jest {
    // tslint:disable-next-line
    interface Matchers<R> {
      toBeAfter(other: Date): R;
      toBeArray(): R;
      toBeArrayOfBooleans(): R;
      toBeArrayOfNumbers(): R;
      toBeArrayOfObjects(): R;
      toBeArrayOfSize(size: number): R;
      toBeArrayOfStrings(): R;
      toBeBefore(other: Date): R;
      toBeBoolean(): R;
      toBeCalculable(): R;
      toBeDate(): R;
      toBeDivisibleBy(divisor: number): R;
      toBeEmptyArray(): R;
      toBeEmptyObject(): R;
      toBeEmptyString(): R;
      toBeEvenNumber(): R;
      toBeFalse(): R;
      toBeFunction(): R;
      toBeIso8601(): R;
      toBeJsonString(): R;
      toBeLongerThan(other: string | any[]): R;
      toBeNonEmptyArray(): R;
      toBeNonEmptyObject(): R;
      toBeNonEmptyString(): R;
      toBeNumber(): R;
      toBeObject(): R;
      toBeOddNumber(): R;
      toBeRegExp(): R;
      toBeSameLengthAs(other: string | any[]): R;
      toBeShorterThan(other: string | any[]): R;
      toBeString(): R;
      toBeTrue(): R;
      toBeValidDate(): R;
      toBeWhitespace(): R;
      toBeWholeNumber(): R;
      // toBeWithinRange(floor: number, ceiling: number): R;
      toEndWith(other: string): R;
      toHandleMissingBranches(shape: object | any[]): R;
      toHandleMissingLeaves(shape: object | any[]): R;
      toHandleMissingNodes(shape: object | any[]): R;
      toHandleNullBranches(shape: object | any[]): R;
      toHandleNullLeaves(shape: object | any[]): R;
      toHandleNullNodes(shape: object | any[]): R;
      toStartWith(other: string): R;
    }
  }
}
