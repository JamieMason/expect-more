import { curry } from './lib/curry';
import { isIndexedList } from './lib/is-indexed-list';

/**
 * Asserts that ${value} is a `String` or `Array` whose length is the same as
 * that of ${otherStringOrArray}.
 * @param otherStringOrArray ['i have', '2 items']
 * @param value ['i also have', '2 items']
 * @matcherName toBeSameLengthAs
 * @memberMatcherName toHaveSameLengthAs
 * @matcherMessage expected ${value} to be a string or array whose length is the
 * same as that of ${otherStringOrArray}
 * @matcherNotMessage expected ${value} not to be a string or array whose length
 * is the same as that of ${otherStringOrArray}
 */
export const isSameLengthAs: {
  (otherStringOrArray: string | any[], value: any): boolean;
  (otherStringOrArray: string | any[]): (value: any) => boolean;
} = curry(
  (otherStringOrArray, value) =>
    isIndexedList(value) && isIndexedList(otherStringOrArray) && value.length === otherStringOrArray.length,
);
