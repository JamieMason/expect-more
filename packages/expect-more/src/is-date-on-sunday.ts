import { isDateOnDayOfWeek } from './is-date-on-day-of-week';

/**
 * Asserts that a value is an instance of `Date` occurring on a Sunday.
 * @param value new Date('2021-08-29')
 * @matcherName toBeDateOnSunday
 * @memberMatcherName toHaveDateOnSunday
 * @matcherMessage expected ${value} to be an instance of Date occurring on a Sunday
 * @matcherNotMessage expected ${value} not to be an instance of Date occurring
 * on a Sunday
 */
export const isDateOnSunday = isDateOnDayOfWeek(0);
