import { isString } from './is-string';

/**
 * Asserts that ${value} is a `String` containing only whitespace characters.
 * @matcherName toBeWhitespace
 * @memberMatcherName toHaveWhitespace
 * @matcherMessage expected ${value} to be a string containing only whitespace
 * characters
 * @matcherNotMessage expected ${value} not to be a string containing only
 * whitespace characters
 */
export const isWhitespace = (value: any): boolean => isString(value) && value.search(/\S/) === -1;
