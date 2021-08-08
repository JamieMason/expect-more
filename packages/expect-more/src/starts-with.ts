import { isNonEmptyString } from './is-non-empty-string';
import { curry2 } from './lib/curry2';

/**
 * Assert value is a string whose leading characters are equal to `other`.
 * @param otherString 'Java'
 * @param value 'JavaScript'
 * @matcherName toStartWith
 * @memberMatcherName toHaveStartingWith
 * @matcherMessage expected ${value} to start with ${otherString}
 * @matcherNotMessage expected ${value} not to start with ${otherString}
 */
export const startsWith = curry2(
  (otherString: string, value: unknown): value is string =>
    isNonEmptyString(value) &&
    isNonEmptyString(otherString) &&
    value.slice(0, otherString.length) === otherString,
);
