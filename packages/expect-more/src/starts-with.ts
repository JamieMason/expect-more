import { isNonEmptyString } from './index';
import { curry } from './lib/curry';

/**
 * Assert value is a string whose leading characters are equal to `other`.
 * @param otherString 'Java'
 * @param value 'JavaScript'
 * @matcherName toStartWith
 * @memberMatcherName toHaveStartingWith
 * @matcherMessage expected ${value} to start with ${otherString}
 * @matcherNotMessage expected ${value} not to start with ${otherString}
 */
export const startsWith: {
  (otherString: string, value: any): boolean;
  (otherString: string): (value: any) => boolean;
} = curry(
  (otherString, value) =>
    isNonEmptyString(value) && isNonEmptyString(otherString) && value.slice(0, otherString.length) === otherString,
);
