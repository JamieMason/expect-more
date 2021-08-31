import { isDateInMonth } from './is-date-in-month';

/**
 * Asserts that a value is an instance of `Date` occurring in July.
 * @param value new Date('2021-07-12')
 * @matcherName toBeDateInJuly
 * @memberMatcherName toHaveDateInJuly
 * @matcherMessage expected ${value} to be an instance of Date occurring in
 * July
 * @matcherNotMessage expected ${value} not to be an instance of Date occurring
 * in July
 */
export const isDateInJuly = isDateInMonth(6);
