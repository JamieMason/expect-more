import { isDate } from './is-date';
import { curry } from './lib/curry';

/**
 * Asserts that ${value} is a valid instance of `Date` whose value occurs after
 * that of ${otherDate}.
 * @param otherDate new Date('2019-12-31')
 * @param value new Date('2020-01-01')
 * @matcherName toBeAfter
 * @memberMatcherName toHaveDateAfter
 * @matcherMessage expected ${value} to be an instance of Date, occurring after
 * ${otherDate}
 * @matcherNotMessage expected ${value} not to be an instance of Date, occurring
 * after ${otherDate}
 */
export const isAfter: {
  (otherDate: Date, value: any): boolean;
  (otherDate: Date): (value: any) => boolean;
} = curry((otherDate, value) => isDate(value) && isDate(otherDate) && value.getTime() > otherDate.getTime());
