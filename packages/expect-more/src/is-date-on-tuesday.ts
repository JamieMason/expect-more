import { isDateOnDayOfWeek } from './is-date-on-day-of-week';

/**
 * Asserts that a value is an instance of `Date` occurring on a Tuesday.
 * @param value new Date('2021-08-31')
 * @matcherName toBeDateOnTuesday
 * @memberMatcherName toHaveDateOnTuesday
 * @matcherMessage expected ${value} to be an instance of Date occurring on a
 * Tuesday
 * @matcherNotMessage expected ${value} not to be an instance of Date occurring
 * on a Tuesday
 */
export const isDateOnTuesday = isDateOnDayOfWeek(2);
