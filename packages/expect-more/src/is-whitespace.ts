import { isString } from './is-string';

/**
 * Asserts that a value is a `String` containing only whitespace characters.
 * @param value ' '
 * @matcherName toBeWhitespace
 * @memberMatcherName toHaveWhitespace
 * @matcherMessage expected ${value} to be a string containing only whitespace
 * characters
 * @matcherNotMessage expected ${value} not to be a string containing only
 * whitespace characters
 */
export const isWhitespace = (value: unknown): value is string =>
  isString(value) && value.search(/\S/) === -1;
