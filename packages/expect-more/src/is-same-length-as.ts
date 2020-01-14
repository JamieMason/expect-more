import { curry } from './lib/curry';
import { isIndexedList } from './lib/is-indexed-list';

/**
 * Asserts that ${value} is a `String` or `Array` whose length is the same as
 * that of ${otherValue}.
 * @matcherName toBeSameLengthAs
 * @memberMatcherName toHaveSameLengthAs
 * @matcherMessage expected ${value} to be a string or array whose length is the
 * same as that of ${otherValue}
 * @matcherNotMessage expected ${value} not to be a string or array whose length
 * is the same as that of ${otherValue}
 */
export const isSameLengthAs: {
  (otherValue: string | any[], value: any): boolean;
  (otherValue: string | any[]): (value: any) => boolean;
} = curry(
  (otherValue, value) => isIndexedList(value) && isIndexedList(otherValue) && value.length === otherValue.length,
);
