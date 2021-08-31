import { isDateOnDayOfWeek } from './is-date-on-day-of-week';

/**
 * Asserts that a value is an instance of `Date` occurring on a Monday.
 * @param value new Date('2021-08-30')
 * @matcherName toBeDateOnMonday
 * @memberMatcherName toHaveDateOnMonday
 * @matcherMessage expected ${value} to be an instance of Date occurring on a
 * Monday
 * @matcherNotMessage expected ${value} not to be an instance of Date occurring
 * on a Monday
 */
export const isDateOnMonday = isDateOnDayOfWeek(1);
