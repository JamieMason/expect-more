import { isAfter } from './is-after';
import { curry } from './lib/curry';

/**
 * Asserts that ${value} is a valid instance of `Date` whose value occurs before
 * that of ${otherDate}.
 * @matcherName toBeBefore
 * @memberMatcherName toHaveDateBefore
 * @matcherMessage expected ${value} to be an instance of Date, occurring before
 * ${otherDate}
 * @matcherNotMessage expected ${value} not to be an instance of Date, occurring
 * before ${otherDate}
 */
export const isBefore: {
  (otherDate: Date, value: any): boolean;
  (otherDate: Date): (value: any) => boolean;
} = curry((otherDate, value) => isAfter(value, otherDate));
