import { curry } from './lib/curry';
import { isIndexedList } from './lib/is-indexed-list';

/**
 * Asserts that ${value} is a `String` or `Array` whose length is greater than
 * that of ${otherValue}.
 * @matcherName toBeLongerThan
 * @memberMatcherName toHaveLongerThan
 * @matcherMessage expected ${value} to be a string or array whose length is
 * greater than that of ${otherValue}
 * @matcherNotMessage expected ${value} not to be a string or array whose length
 * is greater than that of ${otherValue}
 */
export const isLongerThan: {
  (otherValue: string | any[], value: any): boolean;
  (otherValue: string | any[]): (value: any) => boolean;
} = curry((otherValue, value) => isIndexedList(value) && isIndexedList(otherValue) && value.length > otherValue.length);
