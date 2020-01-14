import { isGreaterThanOrEqualTo } from './is-greater-than-or-equal-to';
import { isLessThanOrEqualTo } from './is-less-than-or-equal-to';
import { curry } from './lib/curry';

/**
 * Asserts that ${value} is a `Number` which is both greater than or equal to
 * ${floor} and less than or equal to ${ceiling}.
 * @matcherName toBeWithinRange
 * @memberMatcherName toHaveNumberWithinRange
 * @matcherMessage expected ${value} to be greater than or equal to ${floor} and
 * less than or equal to ${ceiling}
 * @matcherNotMessage expected ${value} not to be greater than or equal to
 * ${floor} and less than or equal to ${ceiling}
 */
export const isWithinRange: {
  (floor: number, ceiling: number, value: any): boolean;
  (floor: number, ceiling: number): (value: any) => boolean;
  (floor: number): (ceiling: number, value: any) => boolean;
} = curry((floor, ceiling, value) => isLessThanOrEqualTo(ceiling, value) && isGreaterThanOrEqualTo(floor, value));
