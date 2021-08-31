import { isDateOnDayOfWeek } from './is-date-on-day-of-week';

/**
 * Asserts that a value is an instance of `Date` occurring on a Wednesday.
 * @param value new Date('2021-09-01')
 * @matcherName toBeDateOnWednesday
 * @memberMatcherName toHaveDateOnWednesday
 * @matcherMessage expected ${value} to be an instance of Date occurring on a
 * Wednesday
 * @matcherNotMessage expected ${value} not to be an instance of Date occurring
 * on a Wednesday
 */
export const isDateOnWednesday = isDateOnDayOfWeek(3);
