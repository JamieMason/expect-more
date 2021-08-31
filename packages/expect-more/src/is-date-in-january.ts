import { isDateInMonth } from './is-date-in-month';

/**
 * Asserts that a value is an instance of `Date` occurring in January.
 * @param value new Date('2021-01-12')
 * @matcherName toBeDateInJanuary
 * @memberMatcherName toHaveDateInJanuary
 * @matcherMessage expected ${value} to be an instance of Date occurring in
 * January
 * @matcherNotMessage expected ${value} not to be an instance of Date occurring
 * in January
 */
export const isDateInJanuary = isDateInMonth(0);
