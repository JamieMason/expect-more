export type AsymmetricMatcher = (value: any) => { asymmetricMatch: (value: any) => boolean };

export type Collection = object | any[];
export type Locator = string | number;
export type DeepReducer<T> = (memo: T, path: Locator[], value?: any) => T;
export type ArrayMutator = (key: Locator, owner: any[]) => void;
export type ObjectMutator = (key: Locator, owner: object) => void;

export interface IBoilerplate {
  pass: boolean;
  message: () => string;
  notMessage: () => string;
}

declare global {
  namespace jest {
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
      toBeNear(epsilon: number, other: number): R;
      toBeNonEmptyArray(): R;
      toBeNonEmptyObject(): R;
      toBeNonEmptyString(): R;
      toBeNull(): R;
      toBeNumber(): R;
      toBeObject(): R;
      toBeOddNumber(): R;
      toBeRegExp(): R;
      toBeSameLengthAs(other: string): R;
      toBeShorterThan(other: string): R;
      toBeString(): R;
      toBeTrue(): R;
      toBeUndefined(): R;
      toBeValidDate(): R;
      toBeWalkable(): R;
      toBeWhitespace(): R;
      toBeWholeNumber(): R;
      toBeWithinRange(floor: number, ceiling: number): R;
      toEndWith(other: string): R;
      toStartWith(other: string): R;
    }
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
      walkable(): AsymmetricMatcher;
      whitespace(): AsymmetricMatcher;
      wholeNumber(): AsymmetricMatcher;
      withinRange(floor: number, ceiling: number): AsymmetricMatcher;
    }
  }
}
