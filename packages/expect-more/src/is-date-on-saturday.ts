import { isDateOnDayOfWeek } from './is-date-on-day-of-week';

/**
 * Asserts that a value is an instance of `Date` occurring on a Saturday.
 * @param value new Date('2021-09-03')
 * @matcherName toBeDateOnSaturday
 * @memberMatcherName toHaveDateOnSaturday
 * @matcherMessage expected ${value} to be an instance of Date occurring on a
 * Saturday
 * @matcherNotMessage expected ${value} not to be an instance of Date occurring
 * on a Saturday
 */
export const isDateOnSaturday = isDateOnDayOfWeek(6);
