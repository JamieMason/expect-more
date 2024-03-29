import { isString } from './is-string';

/**
 * Asserts that a value is a valid `String` containing at least one character.
 * @param value 'i am not empty'
 * @matcherName toBeNonEmptyString
 * @memberMatcherName toHaveNonEmptyString
 * @matcherMessage expected ${value} to be a string with at least one character
 * @matcherNotMessage expected ${value} not to be a string with at least one
 * character
 */
export const isNonEmptyString = (value: unknown): value is string =>
  isString(value) && value.length > 0;
