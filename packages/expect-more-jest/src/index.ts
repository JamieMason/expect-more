import * as api from 'expect-more';
import { missingBranches, missingLeaves, missingNodes, nullBranches, nullLeaves, nullNodes } from './gen';
import { AsymmetricMatcher, IBoilerplate } from './typings';

const boilerplate = ({ pass, message, notMessage }: IBoilerplate) => ({
  message: pass ? notMessage : message,
  pass
});

const asymmBoilerplate = (contract: string, expectation: (...args: any[]) => boolean): AsymmetricMatcher => (
  ...cache
) => ({
  $$typeof: Symbol.for('jest.asymmetricMatcher'),
  asymmetricMatch: (...args) => expectation(...cache, ...args),
  toAsymmetricMatcher: () => contract
});

export const asymmetric = {
  after: asymmBoilerplate('Any<After(other: date)>', api.isAfter),
  arrayOfBooleans: asymmBoilerplate('Any<ArrayOfBooleans>', api.isArrayOfBooleans),
  arrayOfNumbers: asymmBoilerplate('Any<ArrayOfNumbers>', api.isArrayOfNumbers),
  arrayOfObjects: asymmBoilerplate('Any<ArrayOfObjects>', api.isArrayOfObjects),
  arrayOfSize: asymmBoilerplate('Any<ArrayOfSize(other: number)>', api.isArrayOfSize),
  arrayOfStrings: asymmBoilerplate('Any<ArrayOfStrings>', api.isArrayOfStrings),
  before: asymmBoilerplate('Any<Before(other: date)>', api.isBefore),
  calculable: asymmBoilerplate('Any<Calculable>', api.isCalculable),
  divisibleBy: asymmBoilerplate('Any<DivisibleBy(other: number)>', api.isDivisibleBy),
  endingWith: asymmBoilerplate('Any<EndingWith(other: string)>', api.endsWith),
  evenNumber: asymmBoilerplate('Any<EvenNumber>', api.isEvenNumber),
  iso8601: asymmBoilerplate('Any<Iso8601>', api.isIso8601),
  jsonString: asymmBoilerplate('Any<JsonString>', api.isJsonString),
  longerThan: asymmBoilerplate('Any<LongerThan(other: string)>', api.isLongerThan),
  near: asymmBoilerplate('Any<Near<other: number, epsilon: number>', api.isNear),
  nonEmptyArray: asymmBoilerplate('Any<NonEmptyArray>', api.isNonEmptyArray),
  nonEmptyObject: asymmBoilerplate('Any<NonEmptyObject>', api.isNonEmptyObject),
  nonEmptyString: asymmBoilerplate('Any<NonEmptyString>', api.isNonEmptyString),
  oddNumber: asymmBoilerplate('Any<OddNumber>', api.isOddNumber),
  sameLengthAs: asymmBoilerplate('Any<SameLengthAs(other: string)>', api.isSameLengthAs),
  shorterThan: asymmBoilerplate('Any<ShorterThan(other: string)>', api.isShorterThan),
  startingWith: asymmBoilerplate('Any<StartingWith(other: string)>', api.startsWith),
  validDate: asymmBoilerplate('Any<ValidDate>', api.isValidDate),
  walkable: asymmBoilerplate('Any<Walkable>', api.isWalkable),
  whitespace: asymmBoilerplate('Any<Whitespace>', api.isWhitespace),
  wholeNumber: asymmBoilerplate('Any<WholeNumber>', api.isWholeNumber),
  withinRange: asymmBoilerplate('Any<WithinRange<floor: number, ceiling: number>', api.isWithinRange)
};

export const gen = {
  missingBranches,
  missingLeaves,
  missingNodes,
  nullBranches,
  nullLeaves,
  nullNodes
};

export const matchers = {
  toBeAfter(received: any, other: Date) {
    return boilerplate({
      message: () => `expected ${received} to be an instance of Date, occurring after ${other}`,
      notMessage: () => `expected ${received} not to be an instance of Date, occurring after ${other}`,
      pass: api.isAfter(other, received)
    });
  },
  toBeArray(received: any) {
    return boilerplate({
      message: () => `expected ${received} to be an array`,
      notMessage: () => `expected ${received} not to be an array`,
      pass: api.isArray(received)
    });
  },
  toBeArrayOfBooleans(received: any) {
    return boilerplate({
      message: () => `expected ${received} to be a non-empty array, containing only boolean values`,
      notMessage: () => `expected ${received} not to be a non-empty array, containing only boolean values`,
      pass: api.isArrayOfBooleans(received)
    });
  },
  toBeArrayOfNumbers(received: any) {
    return boilerplate({
      message: () => `expected ${received} to be a non-empty array, containing only numbers`,
      notMessage: () => `expected ${received} not to be a non-empty array, containing only numbers`,
      pass: api.isArrayOfNumbers(received)
    });
  },
  toBeArrayOfObjects(received: any) {
    return boilerplate({
      message: () => `expected ${received} to be a non-empty array, containing only objects`,
      notMessage: () => `expected ${received} not to be a non-empty array, containing only objects`,
      pass: api.isArrayOfObjects(received)
    });
  },
  toBeArrayOfSize(received: any, size: number) {
    return boilerplate({
      message: () => `expected ${received} to be an array containing exactly ${size} items`,
      notMessage: () => `expected ${received} not to be an array containing exactly ${size} items`,
      pass: api.isArrayOfSize(size, received)
    });
  },
  toBeArrayOfStrings(received: any) {
    return boilerplate({
      message: () => `expected ${received} to be a non-empty array, containing only strings`,
      notMessage: () => `expected ${received} not to be a non-empty array, containing only strings`,
      pass: api.isArrayOfStrings(received)
    });
  },
  toBeBefore(received: any, other: Date) {
    return boilerplate({
      message: () => `expected ${received} to be an instance of Date, occurring before ${other}`,
      notMessage: () => `expected ${received} not to be an instance of Date, occurring before ${other}`,
      pass: api.isBefore(other, received)
    });
  },
  toBeBoolean(received: any) {
    return boilerplate({
      message: () => `expected ${received} to be true, false, or an instance of Boolean`,
      notMessage: () => `expected ${received} not to be true, false, or an instance of Boolean`,
      pass: api.isBoolean(received)
    });
  },
  toBeCalculable(received: any) {
    return boilerplate({
      message: () => `expected ${received} to be coercible for use in mathemetical operations`,
      notMessage: () => `expected ${received} not to be coercible for use in mathemetical operations`,
      pass: api.isCalculable(received)
    });
  },
  toBeDate(received: any) {
    return boilerplate({
      message: () => `expected ${received} to be an instance of Date`,
      notMessage: () => `expected ${received} not to be an instance of Date`,
      pass: api.isDate(received)
    });
  },
  toBeDivisibleBy(received: number, divisor: any) {
    return boilerplate({
      message: () => `expected ${received} to be divisible by ${divisor}`,
      notMessage: () => `expected ${received} not to be divisible by ${divisor}`,
      pass: api.isDivisibleBy(divisor, received)
    });
  },
  toBeEmptyArray(received: any) {
    return boilerplate({
      message: () => `expected ${received} to be an array without any items`,
      notMessage: () => `expected ${received} not to be an array without any items`,
      pass: api.isEmptyArray(received)
    });
  },
  toBeEmptyObject(received: any) {
    return boilerplate({
      message: () => `expected ${received} to be an object without any own members`,
      notMessage: () => `expected ${received} not to be an object without any own members`,
      pass: api.isEmptyObject(received)
    });
  },
  toBeEmptyString(received: any) {
    return boilerplate({
      message: () => `expected ${received} to be an empty string or empty instance of String`,
      notMessage: () => `expected ${received} not to be an empty string or empty instance of String`,
      pass: api.isEmptyString(received)
    });
  },
  toBeEvenNumber(received: any) {
    return boilerplate({
      message: () => `expected ${received} to be an even number`,
      notMessage: () => `expected ${received} not to be an even number`,
      pass: api.isEvenNumber(received)
    });
  },
  toBeFalse(received: any) {
    return boilerplate({
      message: () => `expected ${received} to be false or Boolean(false)`,
      notMessage: () => `expected ${received} not to be false or Boolean(false)`,
      pass: api.isFalse(received)
    });
  },
  toBeFunction(received: any) {
    return boilerplate({
      message: () => `expected ${received} to be a function`,
      notMessage: () => `expected ${received} not to be a function`,
      pass: api.isFunction(received)
    });
  },
  toBeIso8601(received: any) {
    return boilerplate({
      message: () => `expected ${received} to be a valid ISO 8601 date string`,
      notMessage: () => `expected ${received} not to be a valid ISO 8601 date string`,
      pass: api.isIso8601(received)
    });
  },
  toBeJsonString(received: any) {
    return boilerplate({
      message: () => `expected ${received} to be a string of valid JSON`,
      notMessage: () => `expected ${received} not to be a string of valid JSON`,
      pass: api.isJsonString(received)
    });
  },
  toBeLongerThan(received: any, other: string) {
    return boilerplate({
      message: () => `expected ${received} to be a string which is longer than another string ${other}`,
      notMessage: () => `expected ${received} not to be a string which is longer than another string ${other}`,
      pass: api.isLongerThan(other, received)
    });
  },
  toBeNear(received: any, epsilon: number, other: number) {
    return boilerplate({
      message: () => `expected ${received} to be no more than ${epsilon} greater or smaller than ${other}`,
      notMessage: () => `expected ${received} not to be no more than ${epsilon} greater or smaller than ${other}`,
      pass: api.isNear(other, epsilon, received)
    });
  },
  toBeNonEmptyArray(received: any) {
    return boilerplate({
      message: () => `expected ${received} to be an array with at least one item`,
      notMessage: () => `expected ${received} not to be an array with at least one item`,
      pass: api.isNonEmptyArray(received)
    });
  },
  toBeNonEmptyObject(received: any) {
    return boilerplate({
      message: () => `expected ${received} to be an object with at least one own member`,
      notMessage: () => `expected ${received} not to be an object with at least one own member`,
      pass: api.isNonEmptyObject(received)
    });
  },
  toBeNonEmptyString(received: any) {
    return boilerplate({
      message: () => `expected ${received} to be a string with at least one character`,
      notMessage: () => `expected ${received} not to be a string with at least one character`,
      pass: api.isNonEmptyString(received)
    });
  },
  toBeNull(received: any) {
    return boilerplate({
      message: () => `expected ${received} to be null`,
      notMessage: () => `expected ${received} not to be null`,
      pass: api.isNull(received)
    });
  },
  toBeNumber(received: any) {
    return boilerplate({
      message: () => `expected ${received} to be a valid number`,
      notMessage: () => `expected ${received} not to be a valid number`,
      pass: api.isNumber(received)
    });
  },
  toBeObject(received: any) {
    return boilerplate({
      message: () => `expected ${received} to be an object`,
      notMessage: () => `expected ${received} not to be an object`,
      pass: api.isObject(received)
    });
  },
  toBeOddNumber(received: any) {
    return boilerplate({
      message: () => `expected ${received} to be an odd number`,
      notMessage: () => `expected ${received} not to be an odd number`,
      pass: api.isOddNumber(received)
    });
  },
  toBeRegExp(received: any) {
    return boilerplate({
      message: () => `expected ${received} to be a regular expression`,
      notMessage: () => `expected ${received} not to be a regular expression`,
      pass: api.isRegExp(received)
    });
  },
  toBeSameLengthAs(received: any, other: string) {
    return boilerplate({
      message: () => `expected ${received} to be a string which is the same length as ${other}`,
      notMessage: () => `expected ${received} not to be a string which is the same length as ${other}`,
      pass: api.isSameLengthAs(other, received)
    });
  },
  toBeShorterThan(received: any, other: string) {
    return boilerplate({
      message: () => `expected ${received} to be a string which is shorter than ${other}`,
      notMessage: () => `expected ${received} not to be a string which is shorter than ${other}`,
      pass: api.isShorterThan(other, received)
    });
  },
  toBeString(received: any) {
    return boilerplate({
      message: () => `expected ${received} to be a string`,
      notMessage: () => `expected ${received} not to be a string`,
      pass: api.isString(received)
    });
  },
  toBeTrue(received: any) {
    return boilerplate({
      message: () => `expected ${received} to be true or Boolean(true)`,
      notMessage: () => `expected ${received} not to be true or Boolean(true)`,
      pass: api.isTrue(received)
    });
  },
  toBeUndefined(received: any) {
    return boilerplate({
      message: () => `expected ${received} to be undefined`,
      notMessage: () => `expected ${received} not to be undefined`,
      pass: api.isUndefined(received)
    });
  },
  toBeValidDate(received: any) {
    return boilerplate({
      message: () => `expected ${received} to be an instance of Date with a valid value`,
      notMessage: () => `expected ${received} not to be an instance of Date with a valid value`,
      pass: api.isValidDate(received)
    });
  },
  toBeWalkable(received: any) {
    return boilerplate({
      message: () => `expected ${received} to be walkable`,
      notMessage: () => `expected ${received} not to be walkable`,
      pass: api.isWalkable(received)
    });
  },
  toBeWhitespace(received: any) {
    return boilerplate({
      message: () => `expected ${received} to be a string containing only whitespace characters`,
      notMessage: () => `expected ${received} not to be a string containing only whitespace characters`,
      pass: api.isWhitespace(received)
    });
  },
  toBeWholeNumber(received: any) {
    return boilerplate({
      message: () => `expected ${received} to be a whole number`,
      notMessage: () => `expected ${received} not to be a whole number`,
      pass: api.isWholeNumber(received)
    });
  },
  toBeWithinRange(received: any, floor: number, ceiling: number) {
    return boilerplate({
      message: () => `expected ${received} to be within range ${floor} - ${ceiling} (inclusive}`,
      notMessage: () => `expected ${received} not to be within range ${floor} - ${ceiling} (inclusive}`,
      pass: api.isWithinRange(floor, ceiling, received)
    });
  },
  toEndWith(received: any, other: string) {
    return boilerplate({
      message: () => `expected ${received} to be a string which ends with ${other}`,
      notMessage: () => `expected ${received} not to be a string which ends with ${other}`,
      pass: api.endsWith(other, received)
    });
  },
  toStartWith(received: any, other: string) {
    return boilerplate({
      message: () => `expected ${received} to be a string which starts with ${other}`,
      notMessage: () => `expected ${received} not to be a string which starts with ${other}`,
      pass: api.startsWith(other, received)
    });
  }
};
