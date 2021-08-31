import { isDateOnDayOfWeek } from './is-date-on-day-of-week';

/**
 * Asserts that a value is an instance of `Date` occurring on a Friday.
 * @param value new Date('2021-09-03')
 * @matcherName toBeDateOnFriday
 * @memberMatcherName toHaveDateOnFriday
 * @matcherMessage expected ${value} to be an instance of Date occurring on a
 * Friday
 * @matcherNotMessage expected ${value} not to be an instance of Date occurring
 * on a Friday
 */
export const isDateOnFriday = isDateOnDayOfWeek(5);
