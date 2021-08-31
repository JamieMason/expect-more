import { isDate } from './is-date';
import { isGreaterThanOrEqualTo } from './is-greater-than-or-equal-to';
import { isLessThanOrEqualTo } from './is-less-than-or-equal-to';
import { curry3 } from './lib/curry3';

/**
 * Asserts that a value is an instance of `Date` occurring on or after `floor`
 * and on or before `ceiling`.
 * @param floor new Date('2019-12-10')
 * @param ceiling new Date('2019-12-12')
 * @param value new Date('2019-12-11')
 * @matcherName toBeDateBetween
 * @memberMatcherName toHaveDateBetween
 * @matcherMessage expected ${value} to be an instance of Date occurring on or
 * after ${floor} and on or before ${ceiling}
 * @matcherNotMessage expected ${value} not to be an instance of Date occurring
 * on or after ${floor} and on or before ${ceiling}
 */
export const isDateBetween = curry3(
  (floor: unknown, ceiling: unknown, value: unknown): value is Date =>
    isDate(value) &&
    isDate(floor) &&
    isDate(ceiling) &&
    isLessThanOrEqualTo(ceiling.getTime(), value.getTime()) &&
    isGreaterThanOrEqualTo(floor.getTime(), value.getTime()),
);
