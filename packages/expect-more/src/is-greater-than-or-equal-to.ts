import { isNumber } from './is-number';
import { curry } from './lib/curry';

/**
 * Asserts that ${value} is greater than or equal to ${otherNumber}.
 * @param otherNumber 5
 * @param value 10
 * @matcherName toBeGreaterThanOrEqualTo
 * @memberMatcherName toHaveGreaterThanOrEqualTo
 * @matcherMessage expected ${value} to be greater than or equal to
 * ${otherNumber}
 * @matcherNotMessage expected ${value} not to be greater than or equal to
 * ${otherNumber}
 */
export const isGreaterThanOrEqualTo: {
  (otherNumber: number, value: any): boolean;
  (otherNumber: number): (value: any) => boolean;
} = curry((otherNumber, value) => isNumber(value) && isNumber(otherNumber) && value >= otherNumber);
