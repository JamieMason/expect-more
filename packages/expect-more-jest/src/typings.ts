export type MatcherFactories = jasmine.CustomMatcherFactories;
export type MatcherFactory = jasmine.CustomMatcherFactory;
export type Result = jasmine.CustomMatcherResult;

export type AsymmetricMatcher = (value: any) => { asymmetricMatch: (value: any) => boolean };

export type AnyFunction = (...args: any[]) => any;
export type Collection = object | any[];
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
) => Result;

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
      toBeLongerThan(other: string): R;
      toBeNonEmptyArray(): R;
      toBeNonEmptyObject(): R;
      toBeNonEmptyString(): R;
      toBeNumber(): R;
      toBeObject(): R;
      toBeOddNumber(): R;
      toBeRegExp(): R;
      toBeSameLengthAs(other: string): R;
      toBeShorterThan(other: string): R;
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
    // tslint:disable-next-line
    interface Expect {
      after(other: Date): AsymmetricMatcher;
      arrayOfBooleans(): AsymmetricMatcher;
      arrayOfNumbers(): AsymmetricMatcher;
      arrayOfObjects(): AsymmetricMatcher;
      arrayOfSize(size: number): AsymmetricMatcher;
      arrayOfStrings(): AsymmetricMatcher;
      before(other: Date): AsymmetricMatcher;
      calculable(): AsymmetricMatcher;
      divisibleBy(divisor: number): AsymmetricMatcher;
      endingWith(other: string): AsymmetricMatcher;
      evenNumber(): AsymmetricMatcher;
      iso8601(): AsymmetricMatcher;
      jsonString(): AsymmetricMatcher;
      longerThan(other: string): AsymmetricMatcher;
      near(other: number, epsilon: number): AsymmetricMatcher;
      nonEmptyArray(): AsymmetricMatcher;
      nonEmptyObject(): AsymmetricMatcher;
      nonEmptyString(): AsymmetricMatcher;
      oddNumber(): AsymmetricMatcher;
      sameLengthAs(other: string): AsymmetricMatcher;
      shorterThan(other: string): AsymmetricMatcher;
      startingWith(other: string): AsymmetricMatcher;
      validDate(): AsymmetricMatcher;
      whitespace(): AsymmetricMatcher;
      wholeNumber(): AsymmetricMatcher;
      withinRange(floor: number, ceiling: number): AsymmetricMatcher;
    }
  }
}
