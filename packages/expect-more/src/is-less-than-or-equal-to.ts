import { isNumber } from './is-number';
import { curry } from './lib/curry';

/**
 * Asserts that ${value} is less than or equal to ${otherNumber}.
 * @param otherNumber 12
 * @param value 8
 * @matcherName toBeLessThanOrEqualTo
 * @memberMatcherName toHaveLessThanOrEqualTo
 * @matcherMessage expected ${value} to be less than or equal to ${otherNumber}
 * @matcherNotMessage expected ${value} not to be less than or equal to
 * ${otherNumber}
 */
export const isLessThanOrEqualTo: {
  (otherNumber: number, value: any): boolean;
  (otherNumber: number): (value: any) => boolean;
} = curry((otherNumber, value) => isNumber(value) && isNumber(otherNumber) && value <= otherNumber);
