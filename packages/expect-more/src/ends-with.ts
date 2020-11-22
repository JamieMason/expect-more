import { isNonEmptyString } from './is-non-empty-string';
import { curry } from './lib/curry';

/**
 * Asserts that ${value} is a string whose trailing characters are equal to ${otherString}.
 * @param otherString 'Script'
 * @param value 'JavaScript'
 * @matcherName toEndWith
 * @memberMatcherName toHaveEndingWith
 * @matcherMessage expected ${value} to end with ${otherString}
 * @matcherNotMessage expected ${value} not to end with ${otherString}
 */
export const endsWith: {
  (otherString: string, value: any): boolean;
  (otherString: string): (value: any) => boolean;
} = curry(
  (otherString, value) =>
    isNonEmptyString(value) &&
    isNonEmptyString(otherString) &&
    value.slice(value.length - otherString.length, value.length) === otherString,
);
