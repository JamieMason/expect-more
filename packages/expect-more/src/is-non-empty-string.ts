import { isString } from './is-string';

/**
 * Asserts that ${value} is a valid `String` containing at least one character.
 * @matcherName toBeNonEmptyString
 * @memberMatcherName toHaveNonEmptyString
 * @matcherMessage expected ${value} to be a string with at least one character
 * @matcherNotMessage expected ${value} not to be a string with at least one
 * character
 */
export const isNonEmptyString = (value: any): boolean => isString(value) && value.length > 0;
