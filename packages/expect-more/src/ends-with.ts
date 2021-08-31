import { isNonEmptyString } from './is-non-empty-string';
import { curry2 } from './lib/curry2';

/**
 * Asserts that value is a string whose trailing characters are equal to
 * those of the provided string.
 * @param otherString 'Script'
 * @param value 'JavaScript'
 * @matcherName toEndWith
 * @memberMatcherName toHaveEndingWith
 * @matcherMessage expected ${value} to end with ${otherString}
 * @matcherNotMessage expected ${value} not to end with ${otherString}
 */
export const endsWith = curry2(
  (otherString: unknown, value: unknown): value is string =>
    isNonEmptyString(value) &&
    isNonEmptyString(otherString) &&
    value.slice(value.length - otherString.length, value.length) === otherString,
);
