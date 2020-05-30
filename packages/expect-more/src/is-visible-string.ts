import { isString } from './is-string';

/**
 * Asserts that ${value} is a valid `String` containing at least one character
 * which is not whitespace.
 * @param value 'i am visible'
 * @matcherName toBeVisibleString
 * @memberMatcherName toHaveVisibleString
 * @matcherMessage expected ${value} to be a string with at least one
 * non-whitespace character
 * @matcherNotMessage expected ${value} not to be a string with at least one
 * non-whitespace character
 */
export const isVisibleString = (value: any): boolean =>
  isString(value) && value.length > 0 && value.search(/\S/) !== -1;
