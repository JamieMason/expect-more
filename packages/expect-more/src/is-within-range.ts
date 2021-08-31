import { isGreaterThanOrEqualTo } from './is-greater-than-or-equal-to';
import { isLessThanOrEqualTo } from './is-less-than-or-equal-to';
import { curry3 } from './lib/curry3';

/**
 * Asserts that a value is a `Number` which is both greater than or equal to
 * `floor` and less than or equal to `ceiling`.
 * @param floor 0
 * @param ceiling 10
 * @param value 7
 * @matcherName toBeWithinRange
 * @memberMatcherName toHaveNumberWithinRange
 * @matcherMessage expected ${value} to be greater than or equal to ${floor} and
 * less than or equal to ${ceiling}
 * @matcherNotMessage expected ${value} not to be greater than or equal to
 * ${floor} and less than or equal to ${ceiling}
 */
export const isWithinRange = curry3(
  (floor: number, ceiling: number, value: unknown): value is number =>
    isLessThanOrEqualTo(ceiling, value) && isGreaterThanOrEqualTo(floor, value),
);
