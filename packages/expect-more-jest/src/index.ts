import chalk from 'chalk';
import * as api from 'expect-more';
import { matcherHint, printExpected } from 'jest-matcher-utils';
import { missingBranches, missingLeaves, missingNodes, nullBranches, nullLeaves, nullNodes } from './lib/gen';
import { AsymmetricMatcher, Collection, IGenerator, MatcherFactories, MatcherFactory, ResultCreator } from './typings';

const createResult: ResultCreator = ({ pass, message, notMessage }) => ({
  message: () => (pass ? notMessage() : message()).trim(),
  pass
});

const asymmBoilerplate = (contract: string, expectation: (...args: any[]) => boolean): AsymmetricMatcher => (
  ...cache
) => ({
  $$typeof: Symbol.for('jest.asymmetricMatcher'),
  asymmetricMatch: (...args) => expectation(...cache, ...args),
  toAsymmetricMatcher: () => contract
});

const asymmetric = {
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
  whitespace: asymmBoilerplate('Any<Whitespace>', api.isWhitespace),
  wholeNumber: asymmBoilerplate('Any<WholeNumber>', api.isWholeNumber),
  withinRange: asymmBoilerplate('Any<WithinRange<floor: number, ceiling: number>', api.isWithinRange)
};

const matchers: MatcherFactories = {};

const toBeAfterCompare = (received: any, other: Date) =>
  createResult({
    message: () => `expected ${received} to be an instance of Date, occurring after ${other}`,
    notMessage: () => `expected ${received} not to be an instance of Date, occurring after ${other}`,
    pass: api.isAfter(other, received)
  });

matchers.toBeAfter = (util, customEqualityTesters) => ({
  compare: toBeAfterCompare
});

const toBeArrayCompare = (received: any) =>
  createResult({
    message: () => `expected ${received} to be an array`,
    notMessage: () => `expected ${received} not to be an array`,
    pass: api.isArray(received)
  });

matchers.toBeArray = (util, customEqualityTesters) => ({
  compare: toBeArrayCompare
});

const toBeArrayOfBooleansCompare = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a non-empty array, containing only boolean values`,
    notMessage: () => `expected ${received} not to be a non-empty array, containing only boolean values`,
    pass: api.isArrayOfBooleans(received)
  });

matchers.toBeArrayOfBooleans = (util, customEqualityTesters) => ({
  compare: toBeArrayOfBooleansCompare
});

const toBeArrayOfNumbersCompare = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a non-empty array, containing only numbers`,
    notMessage: () => `expected ${received} not to be a non-empty array, containing only numbers`,
    pass: api.isArrayOfNumbers(received)
  });

matchers.toBeArrayOfNumbers = (util, customEqualityTesters) => ({
  compare: toBeArrayOfNumbersCompare
});

const toBeArrayOfObjectsCompare = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a non-empty array, containing only objects`,
    notMessage: () => `expected ${received} not to be a non-empty array, containing only objects`,
    pass: api.isArrayOfObjects(received)
  });

matchers.toBeArrayOfObjects = (util, customEqualityTesters) => ({
  compare: toBeArrayOfObjectsCompare
});

const toBeArrayOfSizeCompare = (received: any, size: number) =>
  createResult({
    message: () => `expected ${received} to be an array containing exactly ${size} items`,
    notMessage: () => `expected ${received} not to be an array containing exactly ${size} items`,
    pass: api.isArrayOfSize(size, received)
  });

matchers.toBeArrayOfSize = (util, customEqualityTesters) => ({
  compare: toBeArrayOfSizeCompare
});

const toBeArrayOfStringsCompare = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a non-empty array, containing only strings`,
    notMessage: () => `expected ${received} not to be a non-empty array, containing only strings`,
    pass: api.isArrayOfStrings(received)
  });

matchers.toBeArrayOfStrings = (util, customEqualityTesters) => ({
  compare: toBeArrayOfStringsCompare
});

const toBeBeforeCompare = (received: any, other: Date) =>
  createResult({
    message: () => `expected ${received} to be an instance of Date, occurring before ${other}`,
    notMessage: () => `expected ${received} not to be an instance of Date, occurring before ${other}`,
    pass: api.isBefore(other, received)
  });

matchers.toBeBefore = (util, customEqualityTesters) => ({
  compare: toBeBeforeCompare
});

const toBeBooleanCompare = (received: any) =>
  createResult({
    message: () => `expected ${received} to be true, false, or an instance of Boolean`,
    notMessage: () => `expected ${received} not to be true, false, or an instance of Boolean`,
    pass: api.isBoolean(received)
  });

matchers.toBeBoolean = (util, customEqualityTesters) => ({
  compare: toBeBooleanCompare
});

const toBeCalculableCompare = (received: any) =>
  createResult({
    message: () => `expected ${received} to be coercible for use in mathemetical operations`,
    notMessage: () => `expected ${received} not to be coercible for use in mathemetical operations`,
    pass: api.isCalculable(received)
  });

matchers.toBeCalculable = (util, customEqualityTesters) => ({
  compare: toBeCalculableCompare
});

const toBeDateCompare = (received: any) =>
  createResult({
    message: () => `expected ${received} to be an instance of Date`,
    notMessage: () => `expected ${received} not to be an instance of Date`,
    pass: api.isDate(received)
  });

matchers.toBeDate = (util, customEqualityTesters) => ({
  compare: toBeDateCompare
});

const toBeDivisibleByCompare = (received: number, divisor: any) =>
  createResult({
    message: () => `expected ${received} to be divisible by ${divisor}`,
    notMessage: () => `expected ${received} not to be divisible by ${divisor}`,
    pass: api.isDivisibleBy(divisor, received)
  });

matchers.toBeDivisibleBy = (util, customEqualityTesters) => ({
  compare: toBeDivisibleByCompare
});

const toBeEmptyArrayCompare = (received: any) =>
  createResult({
    message: () => `expected ${received} to be an array without any items`,
    notMessage: () => `expected ${received} not to be an array without any items`,
    pass: api.isEmptyArray(received)
  });

matchers.toBeEmptyArray = (util, customEqualityTesters) => ({
  compare: toBeEmptyArrayCompare
});

const toBeEmptyObjectCompare = (received: any) =>
  createResult({
    message: () => `expected ${received} to be an object without any own members`,
    notMessage: () => `expected ${received} not to be an object without any own members`,
    pass: api.isEmptyObject(received)
  });

matchers.toBeEmptyObject = (util, customEqualityTesters) => ({
  compare: toBeEmptyObjectCompare
});

const toBeEmptyStringCompare = (received: any) =>
  createResult({
    message: () => `expected ${received} to be an empty string or empty instance of String`,
    notMessage: () => `expected ${received} not to be an empty string or empty instance of String`,
    pass: api.isEmptyString(received)
  });

matchers.toBeEmptyString = (util, customEqualityTesters) => ({
  compare: toBeEmptyStringCompare
});

const toBeEvenNumberCompare = (received: any) =>
  createResult({
    message: () => `expected ${received} to be an even number`,
    notMessage: () => `expected ${received} not to be an even number`,
    pass: api.isEvenNumber(received)
  });

matchers.toBeEvenNumber = (util, customEqualityTesters) => ({
  compare: toBeEvenNumberCompare
});

const toBeFalseCompare = (received: any) =>
  createResult({
    message: () => `expected ${received} to be false or Boolean(false)`,
    notMessage: () => `expected ${received} not to be false or Boolean(false)`,
    pass: api.isFalse(received)
  });

matchers.toBeFalse = (util, customEqualityTesters) => ({
  compare: toBeFalseCompare
});

const toBeFunctionCompare = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a function`,
    notMessage: () => `expected ${received} not to be a function`,
    pass: api.isFunction(received)
  });

matchers.toBeFunction = (util, customEqualityTesters) => ({
  compare: toBeFunctionCompare
});

const toBeIso8601Compare = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a valid ISO 8601 date string`,
    notMessage: () => `expected ${received} not to be a valid ISO 8601 date string`,
    pass: api.isIso8601(received)
  });

matchers.toBeIso8601 = (util, customEqualityTesters) => ({
  compare: toBeIso8601Compare
});

const toBeJsonStringCompare = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a string of valid JSON`,
    notMessage: () => `expected ${received} not to be a string of valid JSON`,
    pass: api.isJsonString(received)
  });

matchers.toBeJsonString = (util, customEqualityTesters) => ({
  compare: toBeJsonStringCompare
});

const toBeLongerThanCompare = (received: any, other: string) =>
  createResult({
    message: () => `expected ${received} to be a string which is longer than another string ${other}`,
    notMessage: () => `expected ${received} not to be a string which is longer than another string ${other}`,
    pass: api.isLongerThan(other, received)
  });

matchers.toBeLongerThan = (util, customEqualityTesters) => ({
  compare: toBeLongerThanCompare
});

const toBeNonEmptyArrayCompare = (received: any) =>
  createResult({
    message: () => `expected ${received} to be an array with at least one item`,
    notMessage: () => `expected ${received} not to be an array with at least one item`,
    pass: api.isNonEmptyArray(received)
  });

matchers.toBeNonEmptyArray = (util, customEqualityTesters) => ({
  compare: toBeNonEmptyArrayCompare
});

const toBeNonEmptyObjectCompare = (received: any) =>
  createResult({
    message: () => `expected ${received} to be an object with at least one own member`,
    notMessage: () => `expected ${received} not to be an object with at least one own member`,
    pass: api.isNonEmptyObject(received)
  });

matchers.toBeNonEmptyObject = (util, customEqualityTesters) => ({
  compare: toBeNonEmptyObjectCompare
});

const toBeNonEmptyStringCompare = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a string with at least one character`,
    notMessage: () => `expected ${received} not to be a string with at least one character`,
    pass: api.isNonEmptyString(received)
  });

matchers.toBeNonEmptyString = (util, customEqualityTesters) => ({
  compare: toBeNonEmptyStringCompare
});

const toBeNumberCompare = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a valid number`,
    notMessage: () => `expected ${received} not to be a valid number`,
    pass: api.isNumber(received)
  });

matchers.toBeNumber = (util, customEqualityTesters) => ({
  compare: toBeNumberCompare
});

const toBeObjectCompare = (received: any) =>
  createResult({
    message: () => `expected ${received} to be an object`,
    notMessage: () => `expected ${received} not to be an object`,
    pass: api.isObject(received)
  });

matchers.toBeObject = (util, customEqualityTesters) => ({
  compare: toBeObjectCompare
});

const toBeOddNumberCompare = (received: any) =>
  createResult({
    message: () => `expected ${received} to be an odd number`,
    notMessage: () => `expected ${received} not to be an odd number`,
    pass: api.isOddNumber(received)
  });

matchers.toBeOddNumber = (util, customEqualityTesters) => ({
  compare: toBeOddNumberCompare
});

const toBeRegExpCompare = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a regular expression`,
    notMessage: () => `expected ${received} not to be a regular expression`,
    pass: api.isRegExp(received)
  });

matchers.toBeRegExp = (util, customEqualityTesters) => ({
  compare: toBeRegExpCompare
});

const toBeSameLengthAsCompare = (received: any, other: string) =>
  createResult({
    message: () => `expected ${received} to be a string which is the same length as ${other}`,
    notMessage: () => `expected ${received} not to be a string which is the same length as ${other}`,
    pass: api.isSameLengthAs(other, received)
  });

matchers.toBeSameLengthAs = (util, customEqualityTesters) => ({
  compare: toBeSameLengthAsCompare
});

const toBeShorterThanCompare = (received: any, other: string) =>
  createResult({
    message: () => `expected ${received} to be a string which is shorter than ${other}`,
    notMessage: () => `expected ${received} not to be a string which is shorter than ${other}`,
    pass: api.isShorterThan(other, received)
  });

matchers.toBeShorterThan = (util, customEqualityTesters) => ({
  compare: toBeShorterThanCompare
});

const toBeStringCompare = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a string`,
    notMessage: () => `expected ${received} not to be a string`,
    pass: api.isString(received)
  });

matchers.toBeString = (util, customEqualityTesters) => ({
  compare: toBeStringCompare
});

const toBeTrueCompare = (received: any) =>
  createResult({
    message: () => `expected ${received} to be true or Boolean(true)`,
    notMessage: () => `expected ${received} not to be true or Boolean(true)`,
    pass: api.isTrue(received)
  });

matchers.toBeTrue = (util, customEqualityTesters) => ({
  compare: toBeTrueCompare
});

const toBeValidDateCompare = (received: any) =>
  createResult({
    message: () => `expected ${received} to be an instance of Date with a valid value`,
    notMessage: () => `expected ${received} not to be an instance of Date with a valid value`,
    pass: api.isValidDate(received)
  });

matchers.toBeValidDate = (util, customEqualityTesters) => ({
  compare: toBeValidDateCompare
});

const toBeWhitespaceCompare = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a string containing only whitespace characters`,
    notMessage: () => `expected ${received} not to be a string containing only whitespace characters`,
    pass: api.isWhitespace(received)
  });

matchers.toBeWhitespace = (util, customEqualityTesters) => ({
  compare: toBeWhitespaceCompare
});

const toBeWholeNumberCompare = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a whole number`,
    notMessage: () => `expected ${received} not to be a whole number`,
    pass: api.isWholeNumber(received)
  });

matchers.toBeWholeNumber = (util, customEqualityTesters) => ({
  compare: toBeWholeNumberCompare
});

// const toBeWithinRangeCompare = (received: any, floor: number, ceiling: number) => {
//   return createResult({
//     message: () => `expected ${received} to be within range ${floor} - ${ceiling} (inclusive}`,
//     notMessage: () => `expected ${received} not to be within range ${floor} - ${ceiling} (inclusive}`,
//     pass: api.isWithinRange(floor, ceiling, received)
//   });
// };

// matchers.toBeWithinRange = (util, customEqualityTesters) => ({
//   compare: toBeWithinRangeCompare
// });

const toEndWithCompare = (received: any, other: string) =>
  createResult({
    message: () => `expected ${received} to be a string which ends with ${other}`,
    notMessage: () => `expected ${received} not to be a string which ends with ${other}`,
    pass: api.endsWith(other, received)
  });

matchers.toEndWith = (util, customEqualityTesters) => ({
  compare: toEndWithCompare
});

const toStartWithCompare = (received: any, other: string) =>
  createResult({
    message: () => `expected ${received} to be a string which starts with ${other}`,
    notMessage: () => `expected ${received} not to be a string which starts with ${other}`,
    pass: api.startsWith(other, received)
  });

matchers.toStartWith = (util, customEqualityTesters) => ({
  compare: toStartWithCompare
});

type generatorCreator = (collection: Collection) => IGenerator;

const createToHandleComparer = (matcherName: string, createGenerator: generatorCreator) => (received: any) => {
  const generator: IGenerator = createGenerator(received);
  const result = generator.assert(received);
  const message = (hint, permutation, error) => `
  ${hint}

  When called with:
    ${permutation}

  Throws:
    ${error}
  `;

  const notMessage = (hint, msg) => `
  ${hint}

  ${msg}
  `;
  return createResult({
    message: () =>
      message(
        matcherHint(`.${matcherName}`, `Function ${received.name}`),
        printExpected(result.permutation),
        chalk.red(result.error.message)
      ),
    notMessage: () =>
      notMessage(matcherHint(`.not.${matcherName}`, `Function ${received.name}`), chalk.red('No Error was thrown')),
    pass: result.pass
  });
};

matchers.toHandleMissingBranches = (util, customEqualityTesters) => ({
  compare: createToHandleComparer('toHandleMissingBranches', missingBranches)
});

matchers.toHandleMissingLeaves = (util, customEqualityTesters) => ({
  compare: createToHandleComparer('toHandleMissingLeaves', missingLeaves)
});

matchers.toHandleMissingNodes = (util, customEqualityTesters) => ({
  compare: createToHandleComparer('toHandleMissingNodes', missingNodes)
});

matchers.toHandleNullBranches = (util, customEqualityTesters) => ({
  compare: createToHandleComparer('toHandleNullBranches', nullBranches)
});

matchers.toHandleNullLeaves = (util, customEqualityTesters) => ({
  compare: createToHandleComparer('toHandleNullLeaves', nullLeaves)
});

matchers.toHandleNullNodes = (util, customEqualityTesters) => ({
  compare: createToHandleComparer('toHandleNullNodes', nullNodes)
});

jasmine.addMatchers(matchers);
Object.assign(expect, asymmetric);
