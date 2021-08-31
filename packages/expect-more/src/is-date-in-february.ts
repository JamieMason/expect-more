import { isDateInMonth } from './is-date-in-month';

/**
 * Asserts that a value is an instance of `Date` occurring in February.
 * @param value new Date('2021-01-12')
 * @matcherName toBeDateInFebruary
 * @memberMatcherName toHaveDateInFebruary
 * @matcherMessage expected ${value} to be an instance of Date occurring in
 * February
 * @matcherNotMessage expected ${value} not to be an instance of Date occurring
 * in February
 */
export const isDateInFebruary = isDateInMonth(1);
