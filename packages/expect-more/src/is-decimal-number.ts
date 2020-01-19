import { isNumber } from './is-number';

/**
 * Asserts that ${value} is a `Number` with positive decimal places.
 * @param value 12.55
 * @matcherName toBeDecimalNumber
 * @memberMatcherName toHaveDecimalNumber
 * @matcherMessage expected ${value} to be a number with positive decimal places
 * @matcherNotMessage expected ${value} not to be a number with positive decimal
 * places
 */
export const isDecimalNumber = (value: any): boolean =>
  isNumber(value) && String(value).indexOf('.') !== -1;
