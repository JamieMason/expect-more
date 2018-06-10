import chalk from 'chalk';
import * as api from 'expect-more';
import { matcherHint, printExpected } from 'jest-matcher-utils';
import { missingBranches, missingLeaves, missingNodes, nullBranches, nullLeaves, nullNodes } from './lib/gen';
import { AnyFunction, Collection, GeneratorCreator, IGenerator, ResultCreator } from './typings';

const createResult: ResultCreator = ({ pass, message, notMessage }) => ({
  message: () => (pass ? notMessage() : message()).trim(),
  pass
});

const matchers: jest.ExpectExtendMap = {};

matchers.toBeAfter = (received: any, other: Date) =>
  createResult({
    message: () => `expected ${received} to be an instance of Date, occurring after ${other}`,
    notMessage: () => `expected ${received} not to be an instance of Date, occurring after ${other}`,
    pass: api.isAfter(other, received)
  });

matchers.toBeArray = (received: any) =>
  createResult({
    message: () => `expected ${received} to be an array`,
    notMessage: () => `expected ${received} not to be an array`,
    pass: api.isArray(received)
  });

matchers.toBeArrayOfBooleans = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a non-empty array, containing only boolean values`,
    notMessage: () => `expected ${received} not to be a non-empty array, containing only boolean values`,
    pass: api.isArrayOfBooleans(received)
  });

matchers.toBeArrayOfNumbers = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a non-empty array, containing only numbers`,
    notMessage: () => `expected ${received} not to be a non-empty array, containing only numbers`,
    pass: api.isArrayOfNumbers(received)
  });

matchers.toBeArrayOfObjects = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a non-empty array, containing only objects`,
    notMessage: () => `expected ${received} not to be a non-empty array, containing only objects`,
    pass: api.isArrayOfObjects(received)
  });

matchers.toBeArrayOfSize = (received: any, size: number) =>
  createResult({
    message: () => `expected ${received} to be an array containing exactly ${size} items`,
    notMessage: () => `expected ${received} not to be an array containing exactly ${size} items`,
    pass: api.isArrayOfSize(size, received)
  });

matchers.toBeArrayOfStrings = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a non-empty array, containing only strings`,
    notMessage: () => `expected ${received} not to be a non-empty array, containing only strings`,
    pass: api.isArrayOfStrings(received)
  });

matchers.toBeBefore = (received: any, other: Date) =>
  createResult({
    message: () => `expected ${received} to be an instance of Date, occurring before ${other}`,
    notMessage: () => `expected ${received} not to be an instance of Date, occurring before ${other}`,
    pass: api.isBefore(other, received)
  });

matchers.toBeBoolean = (received: any) =>
  createResult({
    message: () => `expected ${received} to be true, false, or an instance of Boolean`,
    notMessage: () => `expected ${received} not to be true, false, or an instance of Boolean`,
    pass: api.isBoolean(received)
  });

matchers.toBeCalculable = (received: any) =>
  createResult({
    message: () => `expected ${received} to be coercible for use in mathemetical operations`,
    notMessage: () => `expected ${received} not to be coercible for use in mathemetical operations`,
    pass: api.isCalculable(received)
  });

matchers.toBeDate = (received: any) =>
  createResult({
    message: () => `expected ${received} to be an instance of Date`,
    notMessage: () => `expected ${received} not to be an instance of Date`,
    pass: api.isDate(received)
  });

matchers.toBeDivisibleBy = (received: number, divisor: any) =>
  createResult({
    message: () => `expected ${received} to be divisible by ${divisor}`,
    notMessage: () => `expected ${received} not to be divisible by ${divisor}`,
    pass: api.isDivisibleBy(divisor, received)
  });

matchers.toBeEmptyArray = (received: any) =>
  createResult({
    message: () => `expected ${received} to be an array without any items`,
    notMessage: () => `expected ${received} not to be an array without any items`,
    pass: api.isEmptyArray(received)
  });

matchers.toBeEmptyObject = (received: any) =>
  createResult({
    message: () => `expected ${received} to be an object without any own members`,
    notMessage: () => `expected ${received} not to be an object without any own members`,
    pass: api.isEmptyObject(received)
  });

matchers.toBeEmptyString = (received: any) =>
  createResult({
    message: () => `expected ${received} to be an empty string or empty instance of String`,
    notMessage: () => `expected ${received} not to be an empty string or empty instance of String`,
    pass: api.isEmptyString(received)
  });

matchers.toBeEvenNumber = (received: any) =>
  createResult({
    message: () => `expected ${received} to be an even number`,
    notMessage: () => `expected ${received} not to be an even number`,
    pass: api.isEvenNumber(received)
  });

matchers.toBeFalse = (received: any) =>
  createResult({
    message: () => `expected ${received} to be false or Boolean(false)`,
    notMessage: () => `expected ${received} not to be false or Boolean(false)`,
    pass: api.isFalse(received)
  });

matchers.toBeFunction = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a function`,
    notMessage: () => `expected ${received} not to be a function`,
    pass: api.isFunction(received)
  });

matchers.toBeIso8601 = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a valid ISO 8601 date string`,
    notMessage: () => `expected ${received} not to be a valid ISO 8601 date string`,
    pass: api.isIso8601(received)
  });

matchers.toBeJsonString = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a string of valid JSON`,
    notMessage: () => `expected ${received} not to be a string of valid JSON`,
    pass: api.isJsonString(received)
  });

matchers.toBeLongerThan = (received: any, other: string) =>
  createResult({
    message: () => `expected ${received} to be a string which is longer than another string ${other}`,
    notMessage: () => `expected ${received} not to be a string which is longer than another string ${other}`,
    pass: api.isLongerThan(other, received)
  });

matchers.toBeNonEmptyArray = (received: any) =>
  createResult({
    message: () => `expected ${received} to be an array with at least one item`,
    notMessage: () => `expected ${received} not to be an array with at least one item`,
    pass: api.isNonEmptyArray(received)
  });

matchers.toBeNonEmptyObject = (received: any) =>
  createResult({
    message: () => `expected ${received} to be an object with at least one own member`,
    notMessage: () => `expected ${received} not to be an object with at least one own member`,
    pass: api.isNonEmptyObject(received)
  });

matchers.toBeNonEmptyString = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a string with at least one character`,
    notMessage: () => `expected ${received} not to be a string with at least one character`,
    pass: api.isNonEmptyString(received)
  });

matchers.toBeNumber = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a valid number`,
    notMessage: () => `expected ${received} not to be a valid number`,
    pass: api.isNumber(received)
  });

matchers.toBeObject = (received: any) =>
  createResult({
    message: () => `expected ${received} to be an object`,
    notMessage: () => `expected ${received} not to be an object`,
    pass: api.isObject(received)
  });

matchers.toBeOddNumber = (received: any) =>
  createResult({
    message: () => `expected ${received} to be an odd number`,
    notMessage: () => `expected ${received} not to be an odd number`,
    pass: api.isOddNumber(received)
  });

matchers.toBeRegExp = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a regular expression`,
    notMessage: () => `expected ${received} not to be a regular expression`,
    pass: api.isRegExp(received)
  });

matchers.toBeSameLengthAs = (received: any, other: string) =>
  createResult({
    message: () => `expected ${received} to be a string which is the same length as ${other}`,
    notMessage: () => `expected ${received} not to be a string which is the same length as ${other}`,
    pass: api.isSameLengthAs(other, received)
  });

matchers.toBeShorterThan = (received: any, other: string) =>
  createResult({
    message: () => `expected ${received} to be a string which is shorter than ${other}`,
    notMessage: () => `expected ${received} not to be a string which is shorter than ${other}`,
    pass: api.isShorterThan(other, received)
  });

matchers.toBeString = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a string`,
    notMessage: () => `expected ${received} not to be a string`,
    pass: api.isString(received)
  });

matchers.toBeTrue = (received: any) =>
  createResult({
    message: () => `expected ${received} to be true or Boolean(true)`,
    notMessage: () => `expected ${received} not to be true or Boolean(true)`,
    pass: api.isTrue(received)
  });

matchers.toBeValidDate = (received: any) =>
  createResult({
    message: () => `expected ${received} to be an instance of Date with a valid value`,
    notMessage: () => `expected ${received} not to be an instance of Date with a valid value`,
    pass: api.isValidDate(received)
  });

matchers.toBeWhitespace = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a string containing only whitespace characters`,
    notMessage: () => `expected ${received} not to be a string containing only whitespace characters`,
    pass: api.isWhitespace(received)
  });

matchers.toBeWholeNumber = (received: any) =>
  createResult({
    message: () => `expected ${received} to be a whole number`,
    notMessage: () => `expected ${received} not to be a whole number`,
    pass: api.isWholeNumber(received)
  });

// matchers.toBeWithinRange = (received: any, floor: number, ceiling: number) => {
//   return createResult({
//     message: () => `expected ${received} to be within range ${floor} - ${ceiling} (inclusive}`,
//     notMessage: () => `expected ${received} not to be within range ${floor} - ${ceiling} (inclusive}`,
//     pass: api.isWithinRange(floor, ceiling, received)
//   });
// };

matchers.toEndWith = (received: any, other: string) =>
  createResult({
    message: () => `expected ${received} to be a string which ends with ${other}`,
    notMessage: () => `expected ${received} not to be a string which ends with ${other}`,
    pass: api.endsWith(other, received)
  });

matchers.toStartWith = (received: any, other: string) =>
  createResult({
    message: () => `expected ${received} to be a string which starts with ${other}`,
    notMessage: () => `expected ${received} not to be a string which starts with ${other}`,
    pass: api.startsWith(other, received)
  });

const createToHandleComparer = (matcherName: string, createGenerator: GeneratorCreator) => (
  fn: AnyFunction,
  shape: Collection
) => {
  const generator: IGenerator = createGenerator(shape);
  const result = generator.assert(fn);
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
        matcherHint(`.${matcherName}`, `Function ${fn.name}`),
        printExpected(result.permutation),
        chalk.red(result.error.stack)
      ),
    notMessage: () =>
      notMessage(matcherHint(`.not.${matcherName}`, `Function ${fn.name}`), chalk.red('No Error was thrown')),
    pass: result.pass
  });
};

matchers.toHandleMissingBranches = createToHandleComparer('toHandleMissingBranches', missingBranches);
matchers.toHandleMissingLeaves = createToHandleComparer('toHandleMissingLeaves', missingLeaves);
matchers.toHandleMissingNodes = createToHandleComparer('toHandleMissingNodes', missingNodes);
matchers.toHandleNullBranches = createToHandleComparer('toHandleNullBranches', nullBranches);
matchers.toHandleNullLeaves = createToHandleComparer('toHandleNullLeaves', nullLeaves);
matchers.toHandleNullNodes = createToHandleComparer('toHandleNullNodes', nullNodes);

expect.extend(matchers);
