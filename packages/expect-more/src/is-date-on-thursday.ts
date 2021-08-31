import { isDateOnDayOfWeek } from './is-date-on-day-of-week';

/**
 * Asserts that a value is an instance of `Date` occurring on a Thursday.
 * @param value new Date('2021-09-02')
 * @matcherName toBeDateOnThursday
 * @memberMatcherName toHaveDateOnThursday
 * @matcherMessage expected ${value} to be an instance of Date occurring on a
 * Thursday
 * @matcherNotMessage expected ${value} not to be an instance of Date occurring
 * on a Thursday
 */
export const isDateOnThursday = isDateOnDayOfWeek(4);
